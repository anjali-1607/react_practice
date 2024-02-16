import React, { useState } from "react";

export default function Toggle() {
  const [name, setName] = useState("blue");
  const changeName = () => {
    name === "blue" ? setName("red") : setName("blue");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "4rem",
      }}>
      <div>
        <h1>{name}</h1>
        <button onClick={changeName}> Click me</button>
      </div>
    </div>
  );
}
