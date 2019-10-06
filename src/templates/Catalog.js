import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const Catalog = ({
  data: {
    allContentfulProduct: { edges },
  },
}) => {
  const nodes = edges.map(({ node }) => node);
  if (!nodes.length)
    return <p>На данный момент нет экземпляров этой категории</p>;

  return (
    <Layout>
      <ul>
        {nodes.map(node => {
          return (
            <li key={node.id}>
              {/* TODO: replace it with gatsby-image in the future */}
              <img src={node.picture.file.url} alt={node.name} width={300} />
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

const dataShape = PropTypes.shape({
  allContentfulProduct: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          picture: PropTypes.shape({
            file: PropTypes.shape({
              fileName: PropTypes.string.isRequired,
              url: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
});

Catalog.propTypes = {
  data: dataShape,
};

export const query = graphql`
  query GetProducts($slug: String) {
    allContentfulProduct(filter: { category: { eq: $slug } }) {
      edges {
        node {
          name
          picture {
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
    }
  }
`;

export default Catalog;
