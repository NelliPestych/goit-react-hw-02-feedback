import React, { Component } from "react";
import Buttons from "./Buttons";
import Statistics from "./Statistics";
import Notification from "./Notification";

export default class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChange1 = (e) => {
    this.setState({ good: this.state.good + 1 });
  };

  handleChange2 = (e) => {
    this.setState({ neutral: this.state.neutral + 1 });
  };

  handleChange3 = (e) => {
    this.setState({ bad: this.state.bad + 1 });
  };

  render() {
    const values = Object.values(this.state);
    let total = 0;
    for (const value of values) {
      total += value;
    }
    const countTotalFeedback = total;

    const countPositiveFeedbackPercentage =
      (this.state.good * 100) / countTotalFeedback;
    return (
      <div>
        <Buttons
          change1={this.handleChange1}
          change2={this.handleChange2}
          change3={this.handleChange3}
        />
        {total > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            totalFeed={countTotalFeedback}
            positive={countPositiveFeedbackPercentage}
          />
        ) : (<Notification message="No feedback given" />)}
      </div>
    );
  }
}
