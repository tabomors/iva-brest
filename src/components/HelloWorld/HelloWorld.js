import React from 'react';

// NOTE: please read about this approach here https://www.gatsbyjs.org/docs/css-modules/
import styles from './HelloWorld.module.css';

const HelloWorld = () => {
  return <p className={styles.helloWorld}>Hello world!</p>;
};

export default HelloWorld;
