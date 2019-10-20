import React from 'react';
import PropTypes from 'prop-types';
import { graphql, navigate } from 'gatsby';
import Layout from '../components/Layout';
import CatalogLayout from '../components/CatalogLayout';

const Catalog = props => {
  console.log('location', props);
  const {
    data: {
      allContentfulProduct: { edges },
    },
    pageContext: { categories, seasons = [''] },
  } = props;
  const products = edges.map(({ node }) => node);
  if (!products.length)
    return <p>На данный момент нет экземпляров этой категории</p>;

  const activeSeason = seasons[0];

  return (
    <Layout>
      <select
        name="seasonSelector"
        id="seasonSelector"
        value={activeSeason}
        onBlur={() => {}}
        onChange={e => {
          navigate(`/catalog/${e.target.value}`);
        }}
      >
        <option value="">
          {activeSeason ? 'Все сезоны' : 'Выберите сезон:'}
        </option>
        <option value="spring">Весна</option>
        <option value="winter">Зима</option>
        <option value="summer">Лето</option>
        <option value="autumn">Осень</option>
      </select>
      <CatalogLayout
        activeSeason={activeSeason}
        categories={categories}
        products={products}
      ></CatalogLayout>
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
  query Catalog($category: String, $seasons: [String!]) {
    allContentfulProduct(
      filter: { category: { eq: $category }, seasons: { in: $seasons } }
    ) {
      edges {
        node {
          name
          picture {
            fixed(width: 250) {
              ...GatsbyContentfulFixed_noBase64
            }
            file {
              fileName
              url
            }
          }
          id
          category
          seasons
          slug
        }
      }
    }
  }
`;

export default Catalog;
