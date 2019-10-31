import React from 'react';
import Layout from '../components/Layout';
import Carousel from 'nuka-carousel';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SeasonsMenu from '../components/SeasonsMenu';

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
  }
`;

const Slider = ({ images }) => {
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
    randomPicture1,
    randomPicture2,
  } = useStaticQuery(SliderDataQuery);
  const images = edges.map(({ node: { childImageSharp } }) => childImageSharp);
  return (
    <Layout>
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

export default IndexPage;
