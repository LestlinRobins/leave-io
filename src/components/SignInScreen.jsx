import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { auth } from "../firebase.jsx";
import SplashScreenStatic from "./SplashScreenStatic.jsx";
import { useState } from "react";
import "../styles/Onboarding.css";

function SignInScreen() {
  const [loading, setLoading] = useState(false);
  function signInWithGoogle() {
    navigator.vibrate(50);
    setLoading(true);
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      hd: "iiitkottayam.ac.in",
    });
    auth.signInWithPopup(provider).finally(() => setLoading(false));
  }
  if (loading) {
    return <SplashScreenStatic />;
  }
  return (
    <div className="onboarding-screen-1">
      <div className="onboarding-screen-1-header">
        <h1 className="onboarding-screen-1-heading">Welcome to Leave.io</h1>
        <p className="onboarding-screen-1-subheading">
          Apply. Approve. Escape.
        </p>
      </div>
      <div className="onboarding-screen-1-signin" onClick={signInWithGoogle}>
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google Logo"
          className="onboarding-screen-1-google-logo"
        />
        <p>Sign in with Google</p>
      </div>
      <div className="onboarding-screen-1-footer">
        <p>
          By signing in, you assure you've read our Terms and Privacy Policy—and
          that you're okay with it.
        </p>
      </div>
    </div>
  );
}

export default SignInScreen;
