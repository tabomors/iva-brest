import React from 'react';
import PropTypes from 'prop-types';
import styles from './RightColumn.module.css';

const RightColumn = ({ children }) => {
  console.log(children);
  return <div className={styles.container}>{children}</div>;
};

RightColumn.propTypes = {
  children: PropTypes.element.isRequired,
};

export default RightColumn;
