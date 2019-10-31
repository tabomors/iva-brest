import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styles from './SeasonsMenu.module.css';

const SeasonsMenu = ({ data }) => {
  return (
    <div className={styles.list}>
      {data.map(({ link, fixedImage, label }) => {
        return (
          <Link to={link} key={link} className={styles.item}>
            <strong className={styles.label}>{label}</strong>
            <Img fixed={fixedImage}></Img>
          </Link>
        );
      })}
    </div>
  );
};

export default SeasonsMenu;
