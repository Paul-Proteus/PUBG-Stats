import React, { Component } from "react";
import PropTypes from "prop-types";
import StatCategory from "../presentational/StatCategory.js"
import Stats from "../presentational/Stats.js";
import FeaturedStats1 from "./FeaturedStats1.js";
import FeaturedStats2 from "./FeaturedStats2.js";

import styles from "../../../css/style.css";

class Dashboard extends Component {
  constructor(props){
    super(props);
  };
      
  render() {

    const { selectedStats } = this.props;
    console.log('Dashboard Stats:  ==> ', selectedStats);
    const statCats = Object.keys(selectedStats);

    return (
      <div className={styles.featureStats} >
        <FeaturedStats1 
          kills={selectedStats['kills']}
          headshots={selectedStats['headshotKills']}
          killstreaks={selectedStats['maxKillStreaks']}
          losses={selectedStats['losses']}
        />
        <FeaturedStats2
          wins={selectedStats['wins']}
          roundsPlayed={selectedStats['roundsPlayed']}
          losses={selectedStats['losses']}
          top10s={selectedStats['top10s']}
        />


        {/* {statCats.map( key => {
          const stat = selectedStats[key]
          
          return (
            <div key={key} className={styles.statBox}>
              <h3 className={styles.h1}> {stat}</h3>
              <p>{key}</p>
            </div>
          );
        })} */}
      </div>
    );
};
}

export default Dashboard;