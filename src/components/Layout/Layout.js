import PropTypes from 'prop-types';
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const data = ['о нас', 'каталог', 'партнеры', 'контакты'];

const Layout = ({ children }) => (
  <>
    <Header menu={data} />
    {children}
    <Footer phone="+375259263378" />
  </>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
