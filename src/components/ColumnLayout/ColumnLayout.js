import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColumnLayout.module.css';

const ColumnLayout = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};

ColumnLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ColumnLayout;
