import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <Header item="contacts" />
      <p className={styles.layout}>Layout Module</p>
      <Footer phone="+375259263378" />
    </>
  );
};

export default Layout;
