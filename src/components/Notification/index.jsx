import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.scss';

class Notification extends Component {
  static defaultProps = {
    text: '404 Not found!',
  };

  render() {
    const { text } = this.props;

    return <p className={styles.notification}>{text}</p>;
  }
}

Notification.propTypes = {
  text: PropTypes.string,
};

export default Notification;
