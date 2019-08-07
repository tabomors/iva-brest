import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColumnLayout.module.css';

const ColumnLayout = ({ leftColumn, rightColumn }) => {
  return (
    <div className={styles.content}>
      {leftColumn}
      {rightColumn}
    </div>
  );
};

ColumnLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

ColumnLayout.propTypes = {
  leftColumn: PropTypes.element,
  rightColumn: PropTypes.element,
};

export default ColumnLayout;
