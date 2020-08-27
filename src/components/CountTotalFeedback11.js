import PropTypes from "prop-types";

export default function CountTotalFeedback11({ feedback }) {
    const values = Object.values(feedback);
    let total = 0;
    for (const value of values) {
      total += value;
    }
  return total;
  
}

CountTotalFeedback11.propTypes = {
  feedback: PropTypes.object.isRequired,
};
