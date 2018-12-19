import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/styles';
// import Navigation from './Navigation.js';
import { NavLink } from 'react-router-dom'


const styles = theme => ({
  container: {
    display: "flex",
    "flex-direction": "row",
    "justify-content": "space-between",
    "background": "gold"
  },
  about: {
    "text-decoration": "none",
    "text-transform": "uppercase",
    "font-family": "Roboto",
    // "font-size": "x-small"
  },
  stats: {
    "text-decoration": "none",
    "font-family": "Roboto",
    // "font-size": "x-small"
  }
});

class NavBar extends Component {
  constructor(props){
    super(props);
  };

  render() {
    const { classes } = this.props;

    return(
        <div >
        <AppBar position="static">
            <Toolbar className={classes.container}>
            <NavLink to="/" className={classes.stats} > PUBG STATS </NavLink>
            <NavLink to="/about" className={classes.about} > About </NavLink>
            </Toolbar>
        </AppBar>
        </div>
    )
  }
}
export default withStyles(styles)(NavBar);