import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.scss';

class Section extends Component {
  static defaultProps = {
    title: 'Maybe here should be your advertising!',
  };

  render() {
    const { children, title } = this.props;

    return (
      <section className={styles.Section}>
        <p className={styles.title}>{title}</p>
        {children}
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
