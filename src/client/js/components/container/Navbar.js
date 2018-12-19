import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  nav: {
    "background": "gold"
  }
});

class NavBar extends Component {
  constructor(props){
    super(props);
  };

  render() {
    const { classes } = this.props;

    return(
        <div className={classes.nav}>
        <AppBar className={classes.nav} position="static">
            <Toolbar>
                <Typography 
                variant="title" 
                >
                PUBG STATS
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
  }
}
export default withStyles(styles)(NavBar);