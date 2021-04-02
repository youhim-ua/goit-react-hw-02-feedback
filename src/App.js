import { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import './styles.scss';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerFeedbackUpdate = item =>
    this.setState(prevState => ({ [item]: prevState[item] + 1 }));

  countTotalFeedback() {
    return Object.values(this.state).reduce((total, item) => total + item, 0);
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const result = (good * 100) / (good + neutral + bad);
    const formattedResult =
      result.toString().length > 4 ? result.toFixed(1) : result;
    return Number(formattedResult);
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.handlerFeedbackUpdate}
        />
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification text={'No feedback given yet!'} />
        )}
      </Section>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default App;
