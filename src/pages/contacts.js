import React from 'react';
import Layout from '../components/Layout';
import ColumnLayout from '../components/ColumnLayout';

const ContactsPage = () => {
  const leftColumn = <h1>Phone</h1>;
  const rightColumn = <h1>+375 (33) 926 33 78</h1>;

  return (
    <Layout>
      <h1>Contact page</h1>
      <ColumnLayout leftColumn={leftColumn} rightColumn={rightColumn} />
    </Layout>
  );
};

export default ContactsPage;
