import React from 'react';
import Layout from '../components/Layout';
import ColumnLayout from '../components/ColumnLayout';

const PartnersPage = () => {
  const leftColumn = <h1>Partners</h1>;
  const rightColumn = <h1>TEXT</h1>;

  return (
    <Layout>
      <h1>Partners</h1>
      <ColumnLayout leftColumn={leftColumn} rightColumn={rightColumn} />
    </Layout>
  );
};

export default PartnersPage;
