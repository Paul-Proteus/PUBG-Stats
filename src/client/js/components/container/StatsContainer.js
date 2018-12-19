import React, { Component } from "react";
import DashboardMUI from './DashboardMUI.js';
import initStats from '../../../../util/initStats.js';
// import Dashboard from './Dashboard.js';

class StatsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      initStats: initStats,
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

    const { selectedStats, initStats } = this.state;
    
    if (selectedStats) {
    return (
        <div style={{"marginTop":"9rem"}} >
          <DashboardMUI
            selectedStats={selectedStats}
          />
        </div>
    )
  } else {
    return (
      <div>
        <div style={{"marginTop":"9rem"}} 
        >
          <DashboardMUI
            selectedStats={initStats}
          />

        </div>
      </div>
    )
  };
  };

};

export default StatsContainer;