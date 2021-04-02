import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <>
        <h2 className={styles.title}>Statistics</h2>
        <div className={styles.statisticsBox}>
          <span>
            Good: <b style={{ color: '#0FDB8E' }}>{good}</b>
          </span>
          <span>
            Neutral: <b>{neutral}</b>
          </span>
          <span>
            Bad: <b style={{ color: 'red' }}>{bad}</b>
          </span>
          <span>
            Total: <b>{total}</b>
          </span>
          <span>
            Positive feedback: <b>{positivePercentage + ' %'}</b>
          </span>
        </div>
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistics;
