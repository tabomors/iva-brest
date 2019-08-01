import React from 'react';
//import styles from './Header.modules.css';
import styles from './Header.module.css';
const Header = props => {
  let { item } = props;

  return (
    <>
      <header className={styles.mainHeader}>
        <nav>
          <ul>
            <li>
              <h1>Header</h1>
              <h3>{item}</h3>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
