import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import ColumnLayout from '../components/ColumnLayout';

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo/logo.jpg" }) {
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

  const head = 'О нас';

  const text = `Мы - это фирма по разработке и производству женской одежды,
   динамично развивающаяся, но уже имеющая свои традиции, узнаваемый стиль.
  С момента образования в 2005 году мы сумели приобрести истинных почитателей
  нашей продукции, как в Беларуси, так и за её пределами - в России, Украине.
  Что же нравится в нашей продукции потребителям.`;

  const textBlock = (
    <div>
      <h1>{head}</h1>
      <p>{text}</p>
    </div>
  );

  return (
    <Layout>
      <h1>About page</h1>
      <ColumnLayout leftColumn={leftColumn} rightColumn={textBlock} />
    </Layout>
  );
};

export default AboutPage;
