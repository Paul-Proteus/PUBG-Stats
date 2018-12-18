import React, { Component } from "react";
/**
 *  Materia-UI Dependencies
 */
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

/**
 * Styling for the FeaturedStats Component
 * @param {String} theme 
 */
const styles = theme => ({

  container: {
    display: "flex",
    "flex-direction": "row",
    "justify-content": "center",
    background: "#d1d1d1"
  },

  card: {
    display: "flex",
    "flex-direction": "column",
    "justify-content": "center",
    background: "gold",

  },
  title: {
    display: "flex",
    "flex-direction": "space-evenly",
  },

  subStatsContainer: {
    display: "flex",
    "flex-direction": "row",
    "justify-content": "center",
  },

  subStat: {
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    margin: "10px",
  }
});


class FeaturedStats1MUI extends Component {
  constructor(props){
    super(props)

  };

  render() {

    const { kills, headshots, killstreaks, losses, classes } = this.props;

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
      <div>

      <Card className={classes.card}>
        <CardContent>

          <div className={classes.subStat}>
            <Typography variant="h2" component="h2">
            {kills}
            </Typography>
            <Typography className={classes.title}>
              KILLS
            </Typography>
          </div>

          <Divider variant="middle" />

          <div className={classes.subStatsContainer}>
            <div className={classes.subStat}>
            <Typography variant="h5" component="h2">
            {headshots}
            </Typography>
            <Typography className={classes.title}>
              HEADSHOTS
            </Typography>
            </div>

            <div className={classes.subStat}>
            <Typography variant="h5" component="h2">
            {killstreaks}
            </Typography>
            <Typography className={classes.title}>
              KILL STREAKS
            </Typography>
            </div>

            <div className={classes.subStat}>
            <Typography variant="h5" component="h2">
            {kdRatioProcessed}
            </Typography>
            <Typography className={classes.title}>
              K/D Ratio
            </Typography>
            </div>

          </div>
        </CardContent>
      </Card>
      </div>
    );
  };
};

export default withStyles(styles)(FeaturedStats1MUI);