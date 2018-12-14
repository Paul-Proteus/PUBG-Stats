import React, { Component } from "react";
import PropTypes from "prop-types";
import StatCategory from "../presentational/StatCategory.js"
import Stats from "../presentational/Stats.js";
import styles from "../../../css/style.css";

class FeaturedStats extends Component {
  constructor(props){
    super(props)

  };

  render() {

    const { kills, headshots, killstreaks, losses } = this.props;
    const kdRatio = kills/losses;
    const kdRatioProcessed = Math.round(kdRatio * 100) / 100;
    console.log(kdRatioProcessed);


    return (
      <div className={styles.featureStatsContainer}>
        <div>
          <p> Kills </p>
          <h1>{kills}</h1>
        </div>
        <div className={styles.subStats}>
          <div>
            <p> Headshots </p>
            <h1>{headshots}</h1>
          </div>
        <div>
          <p> Highest Kill Streak </p>
          <h1>{killstreaks}</h1>
        </div>
        <div>
          <p> K/D </p>
          <h1>{kdRatioProcessed}</h1>
        </div>
  
        </div>
      </div>
    );
  };
};

export default FeaturedStats;