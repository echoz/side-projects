'use strict';

// An original browser illustration; no application code or live data is used.
(() => {
  const glyphs = {
    A: ['010','101','111','101','101'], B: ['110','101','110','101','110'],
    C: ['011','100','100','100','011'], D: ['110','101','101','101','110'],
    E: ['111','100','110','100','111'], F: ['111','100','110','100','100'],
    G: ['011','100','101','101','011'], H: ['101','101','111','101','101'],
    I: ['111','010','010','010','111'], J: ['001','001','001','101','010'],
    K: ['101','101','110','101','101'], L: ['100','100','100','100','111'],
    M: ['101','111','111','101','101'], N: ['101','111','111','111','101'],
    O: ['010','101','101','101','010'], P: ['110','101','110','100','100'],
    Q: ['010','101','101','111','011'], R: ['110','101','110','101','101'],
    S: ['011','100','010','001','110'], T: ['111','010','010','010','010'],
    U: ['101','101','101','101','111'], V: ['101','101','101','101','010'],
    W: ['101','101','111','111','101'], X: ['101','101','010','101','101'],
    Y: ['101','101','010','010','010'], Z: ['111','001','010','100','111'],
    0: ['111','101','101','101','111'], 1: ['010','110','010','010','111'],
    2: ['110','001','010','100','111'], 3: ['110','001','010','001','110'],
    4: ['101','101','111','001','001'], 5: ['111','100','110','001','110'],
    6: ['011','100','111','101','111'], 7: ['111','001','010','010','010'],
    8: ['111','101','111','101','111'], 9: ['111','101','111','001','110'],
    ' ': ['000','000','000','000','000']
  };
  const svg = document.getElementById('pixel-grid');
  const title = document.getElementById('pixel-title');
  const progress = document.getElementById('progress');
  const progressLabel = document.getElementById('progress-label');
  const progressValue = document.getElementById('progress-value');
  const readout = document.getElementById('readout');
  const tag = document.getElementById('view-tag');
  const manualControls = document.getElementById('manual-controls');
  const manualLabel = document.getElementById('manual-label');
  const manualProgress = document.getElementById('manual-progress');
  const buttons = [...document.querySelectorAll('[data-view]')];
  const values = { quota: 62, workout: 35, manual: 60 };
  let view = 'quota';
  const pixels = Array.from({ length: 256 }, (_, index) => {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', String((index % 32) * 12 + 6));
    circle.setAttribute('cy', String(Math.floor(index / 32) * 12 + 6));
    circle.setAttribute('r', '4');
    circle.setAttribute('fill', '#211b31');
    circle.setAttribute('aria-hidden', 'true');
    svg.append(circle);
    return circle;
  });

  function render() {
    const amount = values[view] ?? 0;
    const label = view === 'quota' ? 'ETA 1H' : view === 'workout' ? 'RUN' :
      view === 'manual' ? manualLabel.value.toUpperCase() : 'MARQUEE';
    const hasProgress = view === 'quota' || view === 'workout' ||
      (view === 'manual' && manualProgress.checked);
    const active = new Set();
    const startX = Math.floor((32 - Math.max(0, label.length * 4 - 1)) / 2);
    const startY = hasProgress ? 0 : 1;
    [...label].forEach((character, characterIndex) => {
      const glyph = glyphs[character] ?? glyphs[' '];
      glyph.forEach((row, y) => [...row].forEach((bit, x) => {
        if (bit === '1') active.add((startY + y) * 32 + startX + characterIndex * 4 + x);
      }));
    });
    if (hasProgress) {
      for (let x = 0; x < Math.round(amount * 32 / 100); x++) active.add(7 * 32 + x);
    }
    if (view === 'fallback') [30, 31, 62, 63].forEach(index => active.add(index));
    const color = view === 'fallback' ? '#fff9ee' : view === 'workout' ? '#ffa7d5' : view === 'manual' ? '#eaff85' : '#79f7f2';
    pixels.forEach((pixel, index) => pixel.setAttribute('fill', active.has(index) ? color : '#211b31'));
    progress.disabled = !hasProgress;
    progress.value = String(amount);
    progressLabel.textContent = view === 'workout' ? 'Workout goal progress' :
      view === 'quota' ? 'Allowance used' : 'Caller-supplied progress';
    progressValue.textContent = hasProgress ? `${amount}%` : '—';
    const description = view === 'quota' ? `ETA 1H · ${amount}% of a synthetic allowance used. The estimate is a fixed example.` :
      view === 'workout' ? `RUN · ${amount}% toward an invented workout goal.` :
      view === 'manual' ? `${label || 'Blank label'} · manual text${hasProgress ? ` with ${amount}% caller-supplied progress` : ', no progress bar'}.` :
      'MARQUEE · illustrated no-provider fallback, with a white reason marker.';
    title.textContent = `Synthetic ${view} illustration: ${description}`;
    readout.textContent = description;
    tag.textContent = `ILLUSTRATED / ${view.toUpperCase()}`;
    manualControls.hidden = view !== 'manual';
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.view === view)));
  }

  buttons.forEach(button => button.addEventListener('click', () => {
    view = button.dataset.view;
    render();
  }));
  progress.addEventListener('input', () => {
    if (progress.disabled) return;
    values[view] = Number(progress.value);
    render();
  });
  manualLabel.addEventListener('input', () => {
    manualLabel.value = manualLabel.value.toUpperCase().replace(/[^A-Z0-9 ]/g, '').slice(0, 8);
    render();
  });
  manualProgress.addEventListener('change', render);
  render();
})();
