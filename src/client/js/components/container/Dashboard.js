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
      </div>
    );
};
}

export default Dashboard;