import React from 'react';
import styles from './CatalogLayout.module.css';
import translateCategory from '../../utils/translateCategory';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const CatalogLayout = ({ categories, products, activeSeason }) => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <nav>
          <ul>
            {categories.map(category => {
              const to = activeSeason
                ? `/catalog/${activeSeason}/${category}`
                : `/catalog/${category}`;
              return (
                <li key={category} className={styles.menuItem}>
                  <Link
                    to={to}
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
