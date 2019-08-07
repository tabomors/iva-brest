import React from 'react';
import Layout from '../components/Layout';
import LeftColumn from '../components/LeftColumn';
import RightColumn from '../components/RightColumn';
import ColumnLayout from '../components/ColumnLayout';

const IndexPage = () => {
  return (
    <Layout>
      <h1>Start page</h1>
      <ColumnLayout>
        <LeftColumn>
          <h1>LeftColumn</h1>
        </LeftColumn>
        <RightColumn>
          <h1>RightColumn</h1>
        </RightColumn>
      </ColumnLayout>
    </Layout>
  );
};

export default IndexPage;
