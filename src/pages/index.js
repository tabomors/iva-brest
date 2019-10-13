import React from 'react';
import Layout from '../components/Layout';
import Carousel from 'nuka-carousel';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const SliderDataQuery = graphql`
  query SliderData {
    sliderImages: allFile(filter: { relativeDirectory: { eq: "slider" } }) {
      edges {
        node {
          childImageSharp {
            id
            fixed(width: 315) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    }
  }
`;

const Slider = ({ images }) => {
  console.log(images);
  return (
    <Carousel slidesToShow={3} enableKeyboardControls>
      {images.map(({ fixed, id }) => (
        <div key={id}>
          <Img fixed={fixed} alt="Slider image" />
        </div>
      ))}
    </Carousel>
  );
};

const IndexPage = () => {
  const {
    sliderImages: { edges },
  } = useStaticQuery(SliderDataQuery);
  const images = edges.map(({ node: { childImageSharp } }) => childImageSharp);
  console.log('images', images);
  return (
    <Layout>
      <h1>Start page</h1>
      <Slider images={images} />
    </Layout>
  );
};

export default IndexPage;
