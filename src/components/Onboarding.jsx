import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/Onboarding.css";

function Onboarding() {
  const screens = [
    <div className="onboarding-screen-2">
      <div className="onboarding-screen-2-header">
        <h1 className="onboarding-screen-2-heading">
          What should we call you?
        </h1>
        <p className="onboarding-screen-2-subheading">
          This helps us auto-fill your leave requests.
        </p>
      </div>
      <div className="onboarding-screen-2-input-section">
        <input
          type="text"
          className="onboarding-screen-2-input"
          placeholder="Your name"
        />
        <p>Please make sure to enter your full name.</p>
      </div>
      <div className="onboarding-screen-2-footer">
        <p>Nicknames are welcome, but your hostel wardens may disagree.</p>
      </div>
    </div>,
  ];
  return (
    <div className="onboarding-container">
      <div className="onboarding-content">{screens[0]}</div>
    </div>
  );
}

export default Onboarding;
