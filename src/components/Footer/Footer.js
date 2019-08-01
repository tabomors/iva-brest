import React from 'react';
import styles from './Footer.module.css';

const Footer = props => {
  let { phone } = props;
  return (
    <footer className={styles.mainFooter}>
      <nav>
        <h1>Footer</h1>
        <h3>{phone}</h3>
      </nav>
    </footer>
  );
};

export default Footer;
