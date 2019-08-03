import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const Product = ({ data: { contentfulProduct: node } }) => {
  return (
    <div>
      <p>{node.name}</p>
      <img src={node.picture.file.url} alt={node.name} width={300} />
    </div>
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
`;

export default Product;
