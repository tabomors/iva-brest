import React from 'react';
import Img from 'gatsby-image';
import styles from './Banner.module.css';

const Banner = ({ image }) => {
  return (
    <div className={styles.banner}>
      <Img fluid={image} height={600} alt="Баннер" />
      <h2 className={styles.title}>Iva Brest</h2>
    </div>
  );
};

export default Banner;
