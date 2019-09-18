import React from 'react';
import Layout from '../components/Layout';
import { useStaticQuery, graphql } from 'gatsby';

import AwesomeSlider from 'react-awesome-slider';

const IndexPage = () => {
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

  const slider = (
    <AwesomeSlider >
      <div data-src={data.file.childImageSharp.fixed.src} />
      <div data-src={data.file.childImageSharp.fixed.src} />
      <div data-src={data.file.childImageSharp.fixed.src} />
    </AwesomeSlider>
  );

  return (
    <Layout>
      <h1>Start page</h1>
      {slider}
      <img src={data.file.childImageSharp.fixed.src} alt="logo" />
    </Layout>
  );
};

export default IndexPage;
