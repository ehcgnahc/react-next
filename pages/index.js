import React from 'react';
import styles from '../styles/index.module.css';
import Item from './item';

function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Ehc-Code</h1>
      <p>This is the homepage.</p>
    </div>
  );
}

export default Home;
