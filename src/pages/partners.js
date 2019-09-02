import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import ColumnLayout from '../components/ColumnLayout';

const PartnersPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "partners/monro.png" }) {
        childImageSharp {
          fixed {
            src
          }
        }
      }
    }
  `);

  const leftColumn = (
    <img src={data.file.childImageSharp.fixed.src} alt="logo" />
  );

  return (
    <Layout>
      <h1>Partners</h1>
      <ColumnLayout leftColumn={leftColumn} />
    </Layout>
  );
};

export default PartnersPage;
