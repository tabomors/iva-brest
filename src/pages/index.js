import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import SeasonsMenu from '../components/SeasonsMenu';
import Slider from '../components/Slider';
import CategoriesList from '../components/CategoriesList';

const IndexPage = ({
  data: {
    sliderImages: { edges },
    randomPicture1,
    randomPicture2,
    categories,
  },
}) => {
  const images = edges.map(({ node: { childImageSharp } }) => childImageSharp);
  const uniqCategories = Array.from(
    new Set(categories.nodes.map(({ category }) => category))
  );
  return (
    <Layout>
      <CategoriesList categories={uniqCategories} />
      <Slider images={images} />
      <SeasonsMenu
        data={[
          {
            link: '/catalog/winter/',
            label: 'Зима',
            fixedImage: randomPicture1.childImageSharp.fixed,
          },
          {
            link: '/catalog/spring/',
            label: 'Весна',
            fixedImage: randomPicture2.childImageSharp.fixed,
          },
          {
            link: '/catalog/summer/',
            label: 'Лето',
            fixedImage: randomPicture1.childImageSharp.fixed,
          },
          {
            link: '/catalog/autumn/',
            label: 'Осень',
            fixedImage: randomPicture2.childImageSharp.fixed,
          },
        ]}
      />
    </Layout>
  );
};

export const query = graphql`
  query HomePageData {
    sliderImages: allFile(filter: { relativeDirectory: { eq: "slider" } }) {
      edges {
        node {
          childImageSharp {
            id
            fixed(width: 315, fit: CONTAIN, height: 500, background: "white") {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
    randomPicture1: file(relativePath: { eq: "other/random1.jpg" }) {
      childImageSharp {
        id
        fixed(width: 400) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    randomPicture2: file(relativePath: { eq: "other/random2.jpg" }) {
      childImageSharp {
        id
        fixed(width: 400) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    categories: allContentfulProduct {
      nodes {
        category
      }
    }
  }
`;

export default IndexPage;
