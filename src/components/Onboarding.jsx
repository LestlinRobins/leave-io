import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/Onboarding.css";

function Onboarding() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [hostel, setHostel] = useState("");
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Please make sure to enter your full name.</p>
        {name.length > 0 && (
          <button
            className="onboarding-screen-2-next-button"
            onClick={() => {
              setCurrentScreen(1);
            }}
          >
            Next
          </button>
        )}
      </div>
      <div className="onboarding-screen-2-footer">
        <p>Nicknames are welcome, but your hostel wardens may disagree.</p>
      </div>
    </div>,
    <div className="onboarding-screen-2">
      <div className="onboarding-screen-2-header">
        <h1 className="onboarding-screen-2-heading">Your number, please.</h1>
        <p className="onboarding-screen-2-subheading">
          In case your return gets delayed, we'll need a way to reach you.
        </p>
      </div>
      <div
        className="onboarding-screen-2-input-section"
        style={{ marginTop: "1.5rem" }}
      >
        <input
          type="text"
          className="onboarding-screen-2-input"
          placeholder="Your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <p>Please make sure to double-check your phone number.</p>
        {phone.length === 10 && (
          <button
            className="onboarding-screen-2-next-button"
            onClick={() => {
              setCurrentScreen(2);
            }}
          >
            Next
          </button>
        )}
      </div>
      <div className="onboarding-screen-2-footer">
        <p>It's just a number, but we promise not to misuse it.</p>
      </div>
    </div>,
    <div className="onboarding-screen-2">
      <div className="onboarding-screen-2-header">
        <h1 className="onboarding-screen-2-heading">
          Which hostel do you stay in?
        </h1>
        <p className="onboarding-screen-2-subheading">
          This helps us auto-fill your leave requests.
        </p>
      </div>
      <div className="onboarding-screen-2-input-section">
        <input
          type="text"
          className="onboarding-screen-2-input"
          placeholder="Your hostel name"
          value={hostel}
          onChange={(e) => setHostel(e.target.value)}
        />
        <p>Please make sure to enter your full hostel name.</p>
        {hostel.length > 0 && (
          <button
            className="onboarding-screen-2-next-button"
            onClick={() => {
              setCurrentScreen();
            }}
          >
            Next
          </button>
        )}
      </div>
      <div className="onboarding-screen-2-footer">
        <p>Nicknames are welcome, but your hostel wardens may disagree.</p>
      </div>
    </div>,
  ];
  return (
    <div className="onboarding-container">
      <div className="onboarding-content">{screens[currentScreen]}</div>
    </div>
  );
}

export default Onboarding;
