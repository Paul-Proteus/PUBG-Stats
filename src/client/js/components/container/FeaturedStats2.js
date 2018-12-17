import React, { Component } from "react";
import PropTypes from "prop-types";
import StatCategory from "../presentational/StatCategory.js"
import Stats from "../presentational/Stats.js";
import styles from "../../../css/style.css";

class FeaturedStats2 extends Component {
  constructor(props){
    super(props)

  };

  render() {

    const { wins, top10s, roundsPlayed, losses } = this.props;

    return (
      <div className={styles.featureStatsContainer}>

        <div className={styles.subStats}>
          <h1>{wins}</h1>
          <p> WINS </p>
        </div>

        <div className={styles.subStatsContainer}>
          <div className={styles.subStats}>
            <h1>{top10s}</h1>
            <p> TOP 10 </p>
          </div>
        <div className={styles.subStats}>
          <h1>{roundsPlayed}</h1>
          <p> ROUNDS PLAYED </p>
        </div>
        <div className={styles.subStats}>
          <h1>{losses}</h1>
          <p> LOSSES </p>
        </div>
        
        </div>
      </div>
    );
  };
};

export default FeaturedStats2;