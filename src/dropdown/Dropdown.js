import React from "react";

export default function Dropdown() {
  return (
    <>
      <h1 style={{ textAlign: "center", border: "1px solid black" }}>
        Dropdown
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <select>
          <option>India</option>
          <option>Paris</option>
          <option>Japan</option>
          <option>USA</option>
        </select>
      </div>
    </>
  );
}
