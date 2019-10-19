import React from 'react';
import styles from './CatalogLayout.module.css';
import translateCategory from '../../utils/translateCategory';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const CatalogLayout = ({ categories, products }) => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <nav>
          <ul>
            {categories.map(category => {
              return (
                <li key={category} className={styles.menuItem}>
                  <Link
                    to={`/catalog/${category}`}
                    activeClassName={styles.active}
                    partiallyActive={true}
                    className={styles.menuLink}
                  >
                    {translateCategory(category)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
      <div className={styles.content}>
        <ul className={styles.productsList}>
          {products.map(node => {
            return (
              <li key={node.id} className={styles.productsItem}>
                <Img fixed={node.picture.fixed} alt={node.name} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CatalogLayout;
