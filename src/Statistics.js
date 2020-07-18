import React from "react";

export default function Statistics({
  good,
  neutral,
  bad,
  totalFeed,
  positive,
}) {
  return (
    <div>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>total: {totalFeed}</p>
      <p>positive feedback: {positive} %</p>
    </div>
  );
}
