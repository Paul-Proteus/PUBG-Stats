import React, {Component } from 'react';
import FormContainerMUI from "./FormContainerMUI.js";
import axios from "axios";
import StatsContainer from "./StatsContainer.js";
import { withStyles } from "@material-ui/styles";


const stylos = theme => ({

  formContainer: {
    "margin-top": "1rem"
  }
});

class Home extends Component {
  constructor(props){
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
  
  if (e.target.id) {
    this.setState({ 
      [e.target.id]: e.target.value
    });
  } else {
    this.setState({ 
      [e.target.name]: e.target.value
    });
  }
};

  render() {

    const { lifetimeStats, tpp, gameMode, platform, region } = this.state;
    const { classes } = this.props;

    return(
      <div>
      <StatsContainer 
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          lifetimeStats={lifetimeStats}
          tpp={tpp}
          gameMode={gameMode}
          / >
        <div >
          <FormContainerMUI
              className={classes.formContainer}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              platform={platform}
              lifetimeStats={lifetimeStats}
              region={region}
              tpp={tpp}
              gameMode={gameMode}
              / >
        </div> 
              </div>
    )
  }
};

export default withStyles(stylos)(Home);