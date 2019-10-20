import React from 'react';
import styles from './Header.module.css';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const HeaderDataQuery = graphql`
  query HeaderData {
    file(relativePath: { eq: "logo/logo.jpg" }) {
      childImageSharp {
        id
        fixed(width: 120) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }

    site {
      siteMetadata {
        siteMenu {
          link
          label
        }
      }
    }
  }
`;

const Header = () => {
  const { file, site } = useStaticQuery(HeaderDataQuery);
  return (
    <header className={styles.mainHeader}>
      <Link to="/">
        <Img fixed={file.childImageSharp.fixed} alt="Iva logo" />
      </Link>
      <nav className={styles.mainHeaderNav}>
        <ul className={styles.mainHeaderList}>
          {site.siteMetadata.siteMenu.map(({ link, label }) => {
            return (
              <li key={link}>
                <Link
                  to={link}
                  className={styles.menuItem}
                  activeClassName={styles.menuItemActive}
                  partiallyActive={true}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
