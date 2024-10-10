import React from 'react';
import styles from '../styles/index.module.css';
import data_home from '../pages/data/curtain_pic1.json'

function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Ehc-Code</h1>
      <div className={styles.allPic}>
        {data_home["pic"].map((item,idx)=>(
          <div className={styles.pic}>
            <img src={item.src} alt={item.alt}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;