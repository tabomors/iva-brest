import PropTypes from 'prop-types';
import React from 'react';
import styles from './Header.module.css';

const Header = ({ menu }) => {
  let menuItem = menu.map(item => (
    <li key={item}>
      <a href="/">{item}</a>
    </li>
  ));
  return (
    <>
      <header className={styles.mainHeader}>
        <a href="/">
          <h1>logo</h1>
        </a>
        <nav className={styles.mainHeaderNav}>
          <ul className={styles.mainHeaderList}>{menuItem}</ul>
        </nav>
      </header>
    </>
  );
};

Header.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.string),
};

export default Header;
