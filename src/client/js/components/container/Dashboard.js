import React, { Component } from 'react';
import Stats from '../presentational/Stats.js';
import styles from '../../../css/style.css';

const Dashboard = ({stats, data}) => ( 
    
  <div className={styles.stats}>

    <div className={styles.data}>
      Stats 1
      <Stats
        stats={stats}
        data={data}
      />
    </div>
    <div className={styles.data}>
      Stats 2
      <Stats
        stats={stats}
        data={data}
      />
    </div>
    <div className={styles.data}>
      Stats 3
      <Stats
        stats={stats}
        data={data}
      />
    </div>
  </div>
);


export default Dashboard;