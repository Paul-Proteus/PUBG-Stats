import React, { Component } from "react";
import PropTypes from "prop-types";
import StatCategory from "../presentational/StatCategory.js"
import Stats from "../presentational/Stats.js";
import styles from "../../../css/style.css";

class FeaturedStats1 extends Component {
  constructor(props){
    super(props)

  };

  render() {

    const { kills, headshots, killstreaks, losses } = this.props;

    // This may be an ugly way to solve for NaN...
    let kdRatio;
    let kdRatioProcessed;

    if (kills === 0 && losses === 0){
      kdRatioProcessed = 0;
    } else {
      kdRatio = kills/losses;
      kdRatioProcessed = Math.round(kdRatio * 100) / 100;
    };

    return (
      <div className={styles.featureStatsContainer}>

        <div className={styles.subStats}>
          <h1>{kills}</h1>
          <p> KILLS </p>
        </div>

        <div className={styles.subStatsContainer}>
          <div className={styles.subStats}>
            <h1>{headshots}</h1>
            <p> HEADSHOTS </p>
          </div>
        <div className={styles.subStats}>
          <h1>{killstreaks}</h1>
          <p> HIGHEST KILL STREAK </p>
        </div>
        <div className={styles.subStats}>
          <h1>{kdRatioProcessed}</h1>
          <p> K/D </p>
        </div>
        
        </div>
      </div>
    );
  };
};

export default FeaturedStats1;