import React from 'react';
import Layout from '../components/Layout';
import ColumnLayout from '../components/ColumnLayout';

const AboutPage = () => {
  const leftColumn = <h1>About</h1>;
  const rightColumn = <h1>TEXT</h1>;

  return (
    <Layout>
      <h1>About page</h1>
      <ColumnLayout leftColumn={leftColumn} rightColumn={rightColumn} />
    </Layout>
  );
};

export default AboutPage;
