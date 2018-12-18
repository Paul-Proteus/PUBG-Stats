import React, { Component } from "react";
import FormContainer from "./components/container/FormContainer.js";
import axios from "axios";
import StatsContainer from "./components/container/StatsContainer.js";
import styles from '../css/style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      platform: "steam",
      region: "NA",
      gameMode: "solo",
      tpp: "fpp",
      selectedStats: {},
      lifetimeStats: null,
        
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getLifetimeStats = this.getLifetimeStats.bind(this);
    this.setlifetimeStats = this.setlifetimeStats.bind(this);
  };

  /*********************************************************
   * STAT TRANSFORMATION METHODS  
   ********************************************************/

  getLifetimeStats = async (username, platform) => {
    const config = { 
      data: {
        username,
        platform,
      }
    };
    const res = await axios.post('/lifetimeStats', config )
    const data = await res;
    return data;
  };

  setlifetimeStats = (stats) => {
    this.setState({
      lifetimeStats: stats
    });
  };

  /*********************************************************
   * EVENT HANDLERS 
   ********************************************************/

  handleSubmit = async (e) => {
    e.preventDefault();
    const username = this.state.username;
    const platform = this.state.platform;
    const region = this.state.region;

    const lifetimeStats = await this.getLifetimeStats(username, platform);

    this.setlifetimeStats(lifetimeStats.data.gameModeStats);
  };

  handleChange = (e) => {
    this.setState({ 
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { lifetimeStats, tpp, gameMode, platform, region } = this.state;

    return ( 
      <div >
          <FormContainer 
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            platform={platform}
            region={region}
            / >
      <div >
        <StatsContainer 
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          lifetimeStats={lifetimeStats}
          tpp={tpp}
          gameMode={gameMode}
          / >
      </div> 
      </div>
    )
  };
};

export default App;