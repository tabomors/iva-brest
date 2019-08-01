import React from 'react';
import styles from './Header.module.css';

const Header = props => {
  let { menu } = props;
  let menuItem = menu.map(item => (
    <li key={item}>
      <a href="#">{item}</a>
    </li>
  ));
  return (
    <>
      <header className={styles.mainHeader}>
        <nav>
          <ul className={styles.mainHeaderList}>{menuItem}</ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
