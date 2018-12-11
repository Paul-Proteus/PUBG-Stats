import React, { Component } from "react";
import PropTypes from "prop-types";
import StatCategory from "../presentational/StatCategory.js"
import Stats from "../presentational/Stats.js";

class Dashboard extends Component {
  constructor(props){
    super(props);
  };
      
  render() {

    const { selectedStats } = this.props;
    console.log('Dashboard Stats:  ==> ', selectedStats);

    const keys = Object.keys(selectedStats)
    const values = Object.values(selectedStats)

    return (
      
      <div>
        <StatCategory
          category={keys}
        />
        <Stats
          stat={values}
        />
      </div>

    )
};
}

export default Dashboard;