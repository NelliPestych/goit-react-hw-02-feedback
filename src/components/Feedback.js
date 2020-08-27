import React from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";
import Section from "./Section";

export default class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (options) => {
    this.setState(state => {
      return {
        [options]: state[options] + 1,
      };
    })
  };

  render() {
    const values = Object.values(this.state);
    let total = 0;
    for (const value of values) {
      total += value;}

    return (
      <div>
        <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={this.onLeaveFeedback}
        />
        </Section>
        <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            feedback={this.state}
          />
        ) : (<Notification message="No feedback given" />)}
        </Section>
      </div>
    );
  }
}
