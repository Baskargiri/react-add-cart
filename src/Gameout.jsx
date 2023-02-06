import { useState } from "react";

export function Gameout() {
  const [val, setVal] = useState("");
  const sty = {
    color: val === "x"
      ? "green" : "red"
  };
  return (
    <div style={sty} className="outline" onClick={() => setVal("x")}>{val}
    </div>

  );
}
