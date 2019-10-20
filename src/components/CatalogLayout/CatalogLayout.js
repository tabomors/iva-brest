import React from 'react';
import styles from './CatalogLayout.module.css';
import translateCategory from '../../utils/translateCategory';
import { Link, navigate } from 'gatsby';
import Img from 'gatsby-image';

const SeasonSelect = ({ activeSeason }) => {
  return (
    <select
      className={styles.seasonSelect}
      name="seasonSelector"
      id="seasonSelector"
      value={activeSeason}
      onBlur={() => {}}
      onChange={e => {
        navigate(`/catalog/${e.target.value}`);
      }}
    >
      <option value="">
        {activeSeason ? 'Все сезоны' : 'Выберите сезон:'}
      </option>
      <option value="spring">Весна</option>
      <option value="winter">Зима</option>
      <option value="summer">Лето</option>
      <option value="autumn">Осень</option>
    </select>
  );
};

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
        <div className={styles.seasonSelectWrapper}>
          <SeasonSelect activeSeason={activeSeason} />
        </div>
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
