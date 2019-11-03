const path = require('path');

// Utils:
const getNodes = edges => {
  return edges.map(({ node }) => node);
};

const getCategories = nodes => {
  return [...new Set(nodes.map(({ category }) => category))];
};

const getSeasonCategories = (products, season) => {
  const seasonCategories = getCategories(
    products.filter(({ seasons }) => seasons.includes(season))
  );
  return seasonCategories;
};

// Creating every possible static page:
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
    // Render only those categories that correspond to the given season
    // For example: if there are no skirts for winter season, UI will not show it
    const seasonCategories = getSeasonCategories(products, season);
    createPage({
      component: catalogTemplate,
      path: `/catalog/${season}/`,
      context: {
        categories: seasonCategories,
        seasons: [season],
      },
    });
  });

  // Render each season + category page (e.g. /winter/jacket, /summer/skirt)
  products.forEach(({ category, seasons }) => {
    seasons.forEach(season => {
      // Render only those categories that correspond to the given season
      // For example: if there are no skirts for winter season, UI will not show it
      const seasonCategories = getSeasonCategories(products, season);

      createPage({
        component: catalogTemplate,
        path: `/catalog/${season}/${category}/`,
        context: {
          category,
          categories: seasonCategories,
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
      path: `/catalog/product/${slug}`,
      context: {
        slug,
        category,
      },
    });
  });
};
