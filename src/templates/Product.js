import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Img from 'gatsby-image';
import ColumnLayout from '../components/ColumnLayout';
import styles from '../components/ColumnLayout/ColumnLayout.module.css';
import commonStyles from '../styles/common.module.css';

const Product = ({ data: { contentfulProduct: node } }) => {
  return (
    <Layout>
      <ColumnLayout
        leftColumn={
          <aside className={`${styles.aside} ${styles.asideAuto}`}>
            <Img fixed={node.picture.fixed} alt={node.name} />
          </aside>
        }
        rightColumn={
          <section className={styles.section}>
            <h2>{node.name}</h2>
            <ul>
              <li>
                {node.description ? (
                  <div
                    className={commonStyles.description}
                    dangerouslySetInnerHTML={{
                      __html: node.description.childMarkdownRemark.html,
                    }}
                  ></div>
                ) : (
                  <p>Описание отсутсвтует</p>
                )}
              </li>
              <li>
                <h3>Состав:</h3>
                {node.structure ? (
                  <div
                    className={commonStyles.description}
                    dangerouslySetInnerHTML={{
                      __html: node.structure.childMarkdownRemark.html,
                    }}
                  ></div>
                ) : (
                  <p>Информация о структуре отсутствует</p>
                )}
              </li>
              <li>
                <h3>Размеры:</h3>
                <p>
                  {node.sizes
                    ? node.sizes.join(', ')
                    : 'Информация о размерах отсутствует'}{' '}
                </p>
              </li>
            </ul>
          </section>
        }
      />
    </Layout>
  );
};

Product.propTypes = PropTypes.shape({
  data: PropTypes.shape({
    contentfulProduct: PropTypes.shape({
      category: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      picture: PropTypes.shape({
        file: PropTypes.shape({
          fileName: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}).isRequired;

export const query = graphql`
  query GetProduct($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      name
      description {
        childMarkdownRemark {
          html
        }
      }
      structure {
        childMarkdownRemark {
          html
        }
      }
      sizes
      picture {
        fixed(width: 300) {
          ...GatsbyContentfulFixed_noBase64
        }
        file {
          fileName
          url
        }
      }
      id
      category
      slug
    }
  }
`;

export default Product;
