'use strict';

(() => {
  // Invented records for this browser illustration. These are not Garmin or
  // Blackbox wire payloads, and this code is not the application's importer.
  const archive = Object.freeze([
    Object.freeze({ id: 'sample-01', date: '2026-09-18', steps: 0, distance_meters: 0, sleep_minutes: 420 }),
    Object.freeze({ id: 'sample-02', date: '2026-09-19', steps: 7600, distance_meters: 5500, sleep_minutes: 435 }),
    Object.freeze({ id: 'sample-03', date: '2026-09-19', steps: 8420, distance_meters: 6100, sleep_minutes: null })
  ]);
  const dayControl = document.getElementById('sample-day');
  const fieldsControl = document.getElementById('sample-fields');
  const clearButton = document.getElementById('clear-projection');
  const rebuildButton = document.getElementById('rebuild-projection');
  const receiptList = document.getElementById('receipt-list');
  const output = document.getElementById('query-output');
  const note = document.getElementById('query-note');
  const state = document.getElementById('projection-state');
  const event = document.getElementById('demo-event');

  function rebuildSample() {
    const daily = new Map();
    archive.forEach(observation => daily.set(observation.date, Object.freeze({
      date: observation.date,
      steps: observation.steps,
      distance_meters: observation.distance_meters,
      sleep_minutes: observation.sleep_minutes,
      source_observation: observation.id
    })));
    return daily;
  }

  let projection = rebuildSample();

  function render() {
    const observations = archive.filter(observation => observation.date === dayControl.value);
    receiptList.replaceChildren();
    observations.forEach((observation, index) => {
      const row = document.createElement('li');
      const heading = document.createElement('div');
      heading.className = 'receipt-heading';
      const id = document.createElement('strong');
      id.textContent = observation.id;
      const badge = document.createElement('span');
      badge.textContent = index === observations.length - 1 ? 'LATEST SAMPLE' : 'EARLIER SAMPLE';
      heading.append(id, badge);
      const values = document.createElement('p');
      values.textContent = `${observation.steps.toLocaleString('en-US')} steps · ${observation.distance_meters.toLocaleString('en-US')} m · sleep ${observation.sleep_minutes === null ? 'absent' : `${observation.sleep_minutes} min`}`;
      row.append(heading, values);
      receiptList.append(row);
    });
    document.getElementById('receipt-count').textContent = `${archive.length} receipts retained`;
    const available = projection !== null;
    clearButton.disabled = !available;
    rebuildButton.disabled = available;
    state.textContent = available ? 'Sample projection available' : 'Sample projection cleared';
    state.classList.toggle('cleared', !available);
    if (!available) {
      output.textContent = '// No derived sample record.\n// The three source observations are retained.\n// Rebuild to query the same sample again.';
      note.textContent = 'Clearing this browser sample changes no source observation. The real application has its own startup and recovery safeguards.';
      return;
    }
    const record = projection.get(dayControl.value);
    const selected = fieldsControl.value === 'steps' ? { date: record.date, steps: record.steps } : record;
    output.textContent = JSON.stringify(selected, null, 2);
    note.textContent = fieldsControl.value === 'steps'
      ? 'Only the requested sample fields are shown. Unselected fields say nothing about missing data.'
      : record.sleep_minutes === null
        ? 'The newer observation has no sleep value. The earlier value is not carried forward.'
        : 'Zero steps is an explicit value in this sample. It is different from an absent measurement.';
  }

  dayControl.addEventListener('change', () => {
    render();
    event.textContent = `Showing the invented ${dayControl.value} observations. No service request.`;
  });
  fieldsControl.addEventListener('change', () => {
    render();
    event.textContent = projection === null
      ? 'Query shape saved for the next sample rebuild. The sample projection is still cleared.'
      : 'Sample query shape changed. Source observations are unchanged.';
  });
  clearButton.addEventListener('click', () => {
    projection = null;
    render();
    event.textContent = 'Sample projection cleared. All three source observations remain. Rebuild to restore two daily records.';
    rebuildButton.focus();
  });
  rebuildButton.addEventListener('click', () => {
    projection = rebuildSample();
    render();
    event.textContent = 'Two sample daily records rebuilt from the same three retained observations. No new download.';
    clearButton.focus();
  });
  render();
})();
