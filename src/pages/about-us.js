import React from 'react';
import Layout from '../components/Layout';
import ColumnLayout from '../components/ColumnLayout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styles from '../components/ColumnLayout/ColumnLayout.module.css';
import commonStyles from '../styles/common.module.css';

const AboutUs = ({ data: { aboutUsPicture } }) => {
  return (
    <Layout>
      <ColumnLayout
        leftColumn={
          <aside className={`${styles.aside} ${styles.asideAuto}`}>
            <Img
              fixed={aboutUsPicture.childImageSharp.fixed}
              alt="Фотография женщины в платье"
            ></Img>
          </aside>
        }
        rightColumn={
          <section className={styles.section}>
            <h2>О нас</h2>
            <div className={commonStyles.description}>
              <p>
                Мы - это фирма по разработке и производству женской одежды,
                динамично развивающаяся, но уже имеющая свои традиции,
                узнаваемый стиль.
              </p>
              <p>
                С момента образования в 2005 году мы сумели приобрести истинных
                почитателей нашей продукции, как в Беларуси, так и за её
                пределами - в России, Украине. Что же нравится в нашей продукции
                потребителям.
              </p>
            </div>
          </section>
        }
      />
    </Layout>
  );
};

export const query = graphql`
  query AboutUsQuery {
    aboutUsPicture: file(relativePath: { eq: "other/random3.jpg" }) {
      childImageSharp {
        id
        fixed(width: 315) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`;

export default AboutUs;
