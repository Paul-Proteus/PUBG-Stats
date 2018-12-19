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
})

class FeaturedStats2MUI extends Component {
  constructor(props){
    super(props)

  };

  render() {

    const { wins, top10s, roundsPlayed, losses, classes } = this.props;

    return (
      <div >

      <Card className={classes.card}>
        <CardContent>

          <div className={classes.subStat}>
            <Typography variant="h2" component="h2">
            {wins}
            </Typography>
            <Typography className={classes.title}>
              WINS
            </Typography>
          </div>

          <Divider variant="middle" />

          <div className={classes.subStatsContainer}>
            <div className={classes.subStat}>
            <Typography variant="h5" component="h2">
            {top10s}
            </Typography>
            <Typography className={classes.title}>
              TOP 10s
            </Typography>
            </div>

            <div className={classes.subStat}>
            <Typography variant="h5" component="h2">
            {roundsPlayed}
            </Typography>
            <Typography className={classes.title}>
              ROUNDS PLAYED
            </Typography>
            </div>

            <div className={classes.subStat}>
            <Typography variant="h5" component="h2">
            {losses}
            </Typography>
            <Typography className={classes.title}>
              LOSSES
            </Typography>
            </div>

          </div>
        </CardContent>
      </Card>
      </div>
    );
  };
};

export default withStyles(styles)(FeaturedStats2MUI);