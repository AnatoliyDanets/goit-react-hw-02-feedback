// import logo from "./logo.svg";
import React, { Component } from 'react';
import './App.css';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';
import Container from './components/Container';

class App extends Component {
  static defaultProps = {
    correctValue: 0,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const target = e.target.textContent;

    this.setState(prevState => ({
      [target]: prevState[target] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((100 / this.countTotalFeedback()) * this.state.good);
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={'Statictics'}>
          {total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message={'No feedback given'} />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
