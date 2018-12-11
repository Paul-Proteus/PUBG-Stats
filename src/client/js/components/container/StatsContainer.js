import React, { Component } from "react";
import styles from '../../../css/style.css';

import Dashboard from './Dashboard.js';

class StatsContainer extends Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange = (e) => {
    this.props.onChange(e);
  };

  handleSubmit = (e) => {
    this.props.onSubmit(e);
  };

  parseLifetimeStats = (stats, gameMode, tpp) => {

    const compiledGameMode = tpp + '-' + gameMode;
    const selectedStats = stats[compiledGameMode];
    return selectedStats;

  };

  render(){

    const { lifetimeStats, tpp, gameMode } = this.props;
    
    // is this mutating state? against best practices?
    if (lifetimeStats) {
      // should this be moved to a lifecycle method???
    const selectedStats = this.parseLifetimeStats(lifetimeStats, gameMode, tpp);
    
    return (
      <div >
        <select
          id="tpp"
          onChange={this.handleChange}
        >
        <option value="fpp">First Person</option>
        <option value="tpp">Third Person</option>
        </select>
        <select
          id="gameMode"
          onChange={this.handleChange}
        >
          <option value="solo">Solo</option>
          <option value="duo">Duo</option>
          <option value="squad">Squad</option>
        </select>

        <div>
          <Dashboard
            selectedStats={selectedStats}
          />

        </div>
      </div>
    )
  } else {
    return "NO DATA"
  }
} 

};

export default StatsContainer;