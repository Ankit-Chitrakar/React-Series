import React from "react";

export function Color({ colorName = "White" }) {
  return (
    <button className="color" style={{backgroundColor: colorName, padding: "10px", width: "100px", borderRadius: "10px", outline: 'none'}} >{colorName}</button>
  );
}


