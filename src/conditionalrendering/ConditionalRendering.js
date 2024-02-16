import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

export default function ConditionalRendering() {
  const [active, setActive] = useState("login");
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <button
          onClick={() => {
            setActive("login");
          }}>
          Login
        </button>
        <button
          onClick={() => {
            setActive("signup");
          }}>
          Signup
        </button>
        {active === "login" && <Login />}
        {active === "signup" && <Signup />}
      </div>
    </>
  );
}
