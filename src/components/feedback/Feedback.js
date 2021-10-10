import { Component } from "react";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Statistics from "./statistic/Statistics.";
import Section from "../section/Section";

class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }
  title = {
    feedback: "Please leave feedback",
    statistic: "Statistic",
  };

  onLeafFeedback = (e) => {
    const name = e.currentTarget.name.toLowerCase();
    this.setState((pervState) => {
      return {
        [name]: pervState[name] + 1,
      };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return (
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
      100
    );
  }

  render() {
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title={this.title.feedback}>
          <FeedbackOptions
            options={["Good", "Neutral", "Bad"]}
            onLeaveFeedback={this.onLeafFeedback}
          />
        </Section>

        <Section title={this.title.statistic}>
          {total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positive={positive}
            />
          ) : (
            <p>No feedback given</p>
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
