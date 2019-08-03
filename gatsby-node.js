const path = require('path');

const getCategories = edges => {
  return edges.map(({ node: { category } }) => category);
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
            slug
          }
        }
      }
    }
  `);

  const categories = getCategories(edges);
  const catalogTemplate = path.resolve('./src/templates/Catalog.js');

  // Render all categories page
  createPage({
    component: catalogTemplate,
    path: `/catalog`,
  });

  // Render each category page (e.g. /dress, /skirt)
  categories.forEach(category => {
    createPage({
      component: catalogTemplate,
      path: `/catalog/${category}/`,
      context: {
        slug: category,
      },
    });
  });

  // Render product page (e.g. /dress/dress-0)
  const productTemplate = path.resolve('./src/templates/Product.js');

  edges.forEach(({ node: { category, slug } }) => {
    createPage({
      component: productTemplate,
      path: `/${category}/${slug}`,
      context: {
        slug,
      },
    });
  });
};
