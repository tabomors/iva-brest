import PropTypes from 'prop-types';
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module.css';

const data = [
  { title: 'о нас', path: '/about' },
  { title: 'каталог', path: '/catalog' },
  { title: 'партнеры', path: '/partners' },
  { title: 'контакты', path: '/contacts' },
];

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header menu={data} />
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
