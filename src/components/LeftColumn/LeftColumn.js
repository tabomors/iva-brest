import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeftColumn.module.css';

const LeftColumn = ({ children }) => {
  console.log(children);
  return <div className={styles.container}>{children}</div>;
};

LeftColumn.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LeftColumn;
