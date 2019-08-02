import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const CollectionPage = ({
  data: {
    allContentfulProduct: { edges: dressEdges = [] },
  },
}) => {
  const nodes = dressEdges.map(({ node }) => node);
  if (!nodes.length) return <p>На данный момент платьев нет</p>;

  return (
    <ul>
      {nodes.map(node => {
        return (
          <li key={node.id}>
            <pre>{JSON.stringify(node, null, '\t')}</pre>
            {/* TODO: replace it with gatsby-image in the future */}
            <img src={node.picture.file.url} alt={node.name} width={300}/>
          </li>
        );
      })}
    </ul>
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

CollectionPage.propTypes = {
  data: dataShape,
};

export const query = graphql`
  query GetAllDresses {
    allContentfulProduct(filter: { category: { eq: "dress" } }) {
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
        }
      }
    }
  }
`;

export default CollectionPage;
