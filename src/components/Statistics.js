import React from "react";
import CountTotalFeedback11 from "./CountTotalFeedback11";
import CountPositiveFeedbackPercentage from "./CountPositiveFeedbackPercentage";
import PropTypes from "prop-types";

export default function Statistics({
  good,
  neutral,
  bad,
  feedback,
}) {
  return (
    <div>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>total: <CountTotalFeedback11 feedback={feedback} /></p>
      <p>positive feedback: <CountPositiveFeedbackPercentage good={good} feedback={feedback} /> %</p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  feedback: PropTypes.object.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

