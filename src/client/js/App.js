import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Navbar from "./components/container/Navbar.js";
import Home from './components/container/Home.js';
import About from './components/container/About.js';
import '../css/style.css';

const styles = theme => ({
  nav: {
    margin: "0px 0px"
  }
})


class App extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { classes } = this.props;

    return ( 
      <BrowserRouter>
      <div className={classes.nav}>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About} />
        </Switch>
      </div>
      </BrowserRouter>
    )
  };
};

export default withStyles(styles)(App);