import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const CollectionPage = ({
  data: {
    allImageSharp: { edges: imageEdges = [] },
  },
}) => {
  if (!imageEdges.length) return <p>Вы ещё не добавили картинок</p>;
  const images = imageEdges.map(({ node: { fixed } }) => fixed);

  return (
    <ul>
      {images.map(imgData => {
        return (
          <li key={imgData.src}>
            <Img fixed={imgData} />
          </li>
        );
      })}
    </ul>
  );
};

const dataShape = PropTypes.shape({
  allImageSharp: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          fixed: PropTypes.shape({
            base64: PropTypes.string.isRequired,
            height: PropTypes.number.isRequired,
            src: PropTypes.string.isRequired,
            srcSet: PropTypes.string.isRequired,
            width: PropTypes.number.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
});

CollectionPage.propTypes = {
  data: dataShape,
};

export const query = graphql`
  query GetCollectionImages {
    allImageSharp {
      edges {
        node {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`;

export default CollectionPage;
