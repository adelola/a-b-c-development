import React from 'react';
import styles from '../stylesheets/components/pagenotfound';
import Challenge from './Challenge'


const PageNotFound = () => {

  return (
    <div className={styles.pagenotfound}>
        <h1 className={styles.pagenotfound}>Page Not Found</h1>
    </div>
    // <Challenge classroom="2" student="2" type="lowercase" />

  )
  
};

export default PageNotFound