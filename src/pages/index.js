import React from 'react';
import Layout from '../components/Layout';
import ColumnLayout from '../components/ColumnLayout';

const IndexPage = () => {
  const leftColumn = <h1>hello leftColumn</h1>;
  const rightColumn = <h1>hello rightColumn</h1>;

  return (
    <Layout>
      <h1>Start page</h1>
      <ColumnLayout leftColumn={leftColumn} rightColumn={rightColumn} />
    </Layout>
  );
};

export default IndexPage;
