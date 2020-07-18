import React from "react";

export default function Buttons({ change1, change2, change3 }) {
  return (
    <div>
      <button onClick={change1}>good</button>
      <button onClick={change2}>neutral</button>
      <button onClick={change3}>bad</button>
    </div>
  );
}
