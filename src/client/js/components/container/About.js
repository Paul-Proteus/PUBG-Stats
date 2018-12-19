import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  about: {
    margin: "10rem",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "font-family": "Roboto"
  }
});

class About extends Component {
  constructor(props){
    super(props);
  };

  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.about}>
        <h1>
          ABOUT
        </h1>
        <p >
          Hi - I'm Dylan Bergstrom, and I built this app as an open source app using React, React-Router, and Material-UI. 
          Iterating on this app has been a lot of fun, and I am actively adding more features. 
        </p>
      </div>
    )
  }
};

export default withStyles(styles)(About);