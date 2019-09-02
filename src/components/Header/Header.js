import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import styles from './Header.module.css';
import { Link } from 'gatsby';

const Header = ({ menu }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo/logo.jpg" }) {
        childImageSharp {
          fixed {
            src
          }
        }
      }
    }
  `);
  const menuItem = menu.map(item => (
    <li key={item}>
      <Link to={item.path}>{item.title}</Link>
    </li>
  ));
  return (
    <>
      <header className={styles.mainHeader}>
        <Link to="/">
          <img src={data.file.childImageSharp.fixed.src} alt="logo" />
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
