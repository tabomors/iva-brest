import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';

const data = ['contacts', 'about', 'partners', 'catalog'];

const Layout = () => {
  return (
    <>
      <Header menu={data} />
      <p className={styles.layout}>Content</p>
      <Footer phone="+375259263378" />
    </>
  );
};

export default Layout;
