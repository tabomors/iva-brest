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
          }
        }
      }
    }
  `);

  const categories = getCategories(edges);
  const categoriesTemplate = path.resolve('./src/templates/Categories.js');

  // Render all categories page
  createPage({
    component: categoriesTemplate,
    path: `/categories`,
  });

  // Render each category page (e.g. /dress, /skirt)
  categories.forEach(category => {
    createPage({
      component: categoriesTemplate,
      path: `/categories/${category}/`,
      context: {
        slug: category,
      },
    });
  });
};
