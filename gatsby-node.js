const path = require('path');

const getNodes = edges => {
  return edges.map(({ node }) => node);
};

const getCategories = nodes => {
  return nodes.map(({ category }) => category);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const {
    data: {
      allContentfulProduct: { edges },
    },
  } = await graphql(`
    {
      allContentfulProduct {
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
            seasons
            slug
          }
        }
      }
    }
  `);

  const products = getNodes(edges);

  const categories = getCategories(products);
  const catalogTemplate = path.resolve('./src/templates/Catalog.js');

  // Render all categories page
  createPage({
    component: catalogTemplate,
    path: `/catalog`,
    context: {
      categories,
    },
  });

  // Render each category page (e.g. /dress, /skirt)
  categories.forEach(category => {
    createPage({
      component: catalogTemplate,
      path: `/catalog/${category}/`,
      context: {
        category,
        categories,
      },
    });
  });

  // Render each season (e.g /winter, /summer)
  const SEASONS = ['winter', 'spring', 'summer', 'autumn'];
  SEASONS.forEach(season => {
    createPage({
      component: catalogTemplate,
      path: `/catalog/${season}/`,
      context: {
        categories,
        seasons: [season],
      },
    });
  });

  // Render each season + category page (e.g. /winter/jacket, /summer/skirt)
  products.forEach(({ category, seasons }) => {
    seasons.forEach(season => {
      createPage({
        component: catalogTemplate,
        path: `/catalog/${season}/${category}/`,
        context: {
          category,
          categories,
          seasons,
        },
      });
    });
  });

  // Render product page (e.g. /dress/dress-0)
  const productTemplate = path.resolve('./src/templates/Product.js');

  products.forEach(({ category, slug }) => {
    createPage({
      component: productTemplate,
      path: `/${category}/${slug}`,
      context: {
        slug,
      },
    });
  });
};
