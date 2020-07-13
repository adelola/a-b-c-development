import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../stylesheets/components/pagenotfound.module.scss';
import NotFound from '../images/404.svg';


const PageNotFound = () => {

  return (
    <div className={styles.pagenotfound}>
        <h1 className={styles.title}>Page Not Found</h1>
        <p>You seem to have lost your way, head <Link to="/"><span className="text-teal-700">Home</span></Link> to get your bearings. </p>
        <NotFound height={500} width={700} />
    </div>
  )
};

export default PageNotFound