import React from 'react';
//import Layout from '../components/Layout';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// const IndexPage = () => {
//   return (
//     <Layout>
//       <h1 style={{ fontSize: '100px', textAlign: 'center' }}>
//         Children content for layout
//       </h1>
//     </Layout>
//   );
// };

// export default IndexPage;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      {
        file(relativePath: {eq: "collection/1Thumbnail-37406.jpg"}) {
          childImageSharp {
            fixed {
              src
            }
          }
        }
      }
    }
  `);
  console.log(this.props.data.allImageSharp.edges[0].node.fixed.base64);
  return (
    <div>
      <h1>Hello gatsby-image</h1>
      {/* <Img
        fixed={data.allImageSharp.edges[0].node.fixed.base64}
        alt="Gatsby Docs are awesome"
      /> */}
    </div>
  );
};

export default IndexPage;
