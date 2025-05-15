import { useState } from "react";
import "./App.css";
import Onboarding from "./components/Onboarding";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.jsx";
import SignInScreen from "./components/SignInScreen.jsx";

function App() {
  const [user] = useAuthState(auth);

  return <>{user ? <Onboarding /> : <SignInScreen />}</>;
}

export default App;
