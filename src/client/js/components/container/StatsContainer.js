import React, { Component } from "react";
// import styles from '../../../css/style.css';

// import Dashboard from './Dashboard.js';
import DashboardMUI from './DashboardMUI.js';



class StatsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedStats: null
    }

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
    
    console.log('tpp in parser -->', tpp);
    if (tpp == "fpp") {
    const compiledGameMode = gameMode + '-' + tpp;
    const selectedStats = stats[compiledGameMode];
    return selectedStats;
    } else {
      const selectedStats = stats[gameMode];
      return selectedStats;
    }
  };

  componentDidUpdate(prevProps) {
    console.log('prevProps -->', prevProps);
    console.log('this.props -->', this.props);

    if (prevProps.lifetimeStats !== this.props.lifetimeStats || prevProps.gameMode !== this.props.gameMode || prevProps.tpp !== this.props.tpp) {
      const selectedStats = this.parseLifetimeStats(this.props.lifetimeStats, this.props.gameMode, this.props.tpp);

      console.log('selected Stats -->', selectedStats);

      this.setState({ 
        selectedStats: selectedStats
      });
    };
  }

  render(){

    const { selectedStats } = this.state;
    
    if (selectedStats) {
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

        <div 
        // className={styles.stats}
        >
          <DashboardMUI
            selectedStats={selectedStats}
          />

        </div>
      </div>
    )
  } else {
      return (
        <h1>
          "NO DATA"
        </h1>
      )
  };
  };

};

export default StatsContainer;