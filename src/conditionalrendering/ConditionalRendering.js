import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

export default function ConditionalRendering() {
  const [active, setActive] = useState("login");
  return (
    <>
      <h1 style={{ textAlign: "center", border: "1px solid black" }}>
        Conditional Rendering
      </h1>
      <br></br>
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
