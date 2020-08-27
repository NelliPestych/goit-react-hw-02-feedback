import PropTypes from "prop-types";

export default function CountPositiveFeedbackPercentage({ good, feedback }) {
  const values = Object.values(feedback);
  let total = 0;
  for (const value of values) {
    total += value;
  }
  const countTotalFeedback = total;
  const positivePercentage = (good * 100) / countTotalFeedback;
  return positivePercentage;
}

CountPositiveFeedbackPercentage.propTypes = {
    feedback: PropTypes.object.isRequired,
    good: PropTypes.number.isRequired,
  };
