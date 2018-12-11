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
      gameMode: null,
      tpp: false,
      lifetimeStats: "no data"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getLifetimeStats = this.getLifetimeStats.bind(this);
    this.setlifetimeStats = this.setlifetimeStats.bind(this);
  };

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
    })
  };

  render() {

    return ( 
      <div >
        <FormContainer 
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        / >
      <div >
        <StatsContainer 
        / >
      </div> 
      </div>
    )
  };
};

export default App;