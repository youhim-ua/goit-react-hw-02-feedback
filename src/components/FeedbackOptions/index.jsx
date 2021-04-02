import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.scss';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div className={styles.buttonContainer}>
        {Object.keys(options).map(item => {
          return (
            <button
              className={styles.feedbackButton}
              key={item}
              type="button"
              onClick={() => onLeaveFeedback(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
