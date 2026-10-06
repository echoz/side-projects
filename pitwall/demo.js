"use strict";

// This presentation-only fixture never reads a clock, network, or device.
class TelemetryDemo {
  static states = Object.freeze({
    receiving: Object.freeze({
      heartRate: "145",
      heartDetail: "Present in this sample",
      readStatus: "Available",
      description: "The sample read succeeded. Both measurements are present."
    }),
    retrying: Object.freeze({
      heartRate: "145",
      heartDetail: "Retained sample · read unavailable",
      readStatus: "Unavailable · retry",
      description: "The read failed. The previous sample remains visible while the client retries; these retained values do not establish current measurements."
    }),
    missing: Object.freeze({
      heartRate: "—",
      heartDetail: "Absent in this sample",
      readStatus: "Available",
      description: "The read succeeded, but heart rate is absent in the sample. Missing is not zero, and a previous heart rate does not fill the gap."
    })
  });

  constructor(panel, controls) {
    this.panel = panel;
    this.controls = controls;
    this.buttons = controls.querySelectorAll("[data-state-button]");
    this.buttons.forEach((button) => {
      button.addEventListener("click", () => this.showState(button.dataset.stateButton));
    });
    this.controls.hidden = false;
  }

  showState(name) {
    const state = TelemetryDemo.states[name];
    if (!state) return;
    this.panel.dataset.state = name;
    this.panel.querySelector("[data-heart-rate]").textContent = state.heartRate;
    this.panel.querySelector("[data-heart-detail]").textContent = state.heartDetail;
    this.panel.querySelector("[data-read-status]").textContent = state.readStatus;
    this.panel.querySelector("[data-demo-description]").textContent = state.description;
    this.buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.stateButton === name));
    });
  }

  static mount() {
    const panel = document.querySelector("[data-demo]");
    const controls = document.querySelector("[data-demo-controls]");
    if (panel && controls) new TelemetryDemo(panel, controls);
  }
}

TelemetryDemo.mount();
