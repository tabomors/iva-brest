import React from 'react';
import { Link } from 'gatsby';
import translateCategory from '../../utils/translateCategory';
import styles from './CategoriesList.module.css';

const CategoriesList = ({ categories }) => {
  return (
    <ul className={styles.list}>
      {categories.map(category => {
        return (
          <li key={category} className={styles.item}>
            <Link to={`/catalog/${category}`}>
              {translateCategory(category)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoriesList;
