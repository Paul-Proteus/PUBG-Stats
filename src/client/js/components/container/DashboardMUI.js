import React, { Component } from "react";
import FeaturedStats1MUI from "./FeaturedStats1MUI.js";
import FeaturedStats2MUI from "./FeaturedStats2MUI.js";
import { withStyles } from "@material-ui/styles";


const styles = theme => ({

  container: {
    display: "flex",
    "flex-direction": "row",
    "justify-content": "space-evenly",
    "margin-left": "15rem",
    "margin-right": "15rem"
  }
});

class DashboardMUI extends Component {
  constructor(props){
    super(props);
  };
      
  render() {

    const { selectedStats, classes } = this.props;

    return (
      <div className={classes.container}
      >
        <FeaturedStats1MUI 
          kills={selectedStats['kills']}
          headshots={selectedStats['headshotKills']}
          killstreaks={selectedStats['maxKillStreaks']}
          losses={selectedStats['losses']}
        />
        <FeaturedStats2MUI
          wins={selectedStats['wins']}
          roundsPlayed={selectedStats['roundsPlayed']}
          losses={selectedStats['losses']}
          top10s={selectedStats['top10s']}
        />
      </div>
    );
};
}

export default withStyles(styles)(DashboardMUI);