import PropTypes from 'prop-types';
import React from 'react';
import styles from './Header.module.css';
import { Link } from 'gatsby';

const Header = ({ menu }) => {
  const menuItem = menu.map(item => (
    <li key={item}>
      <Link to={item.path}>{item.title}</Link>
    </li>
  ));
  return (
    <>
      <header className={styles.mainHeader}>
        <Link to="/">
          <h1>logo</h1>
        </Link>
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
