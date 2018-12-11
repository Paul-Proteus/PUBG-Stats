import React, { Component } from "react";
import styles from '../../../css/style.css';

import Dashboard from './Dashboard.js';

class StatsContainer extends Component {
  constructor(){
    super();

  };


  render(){


    return (
      <div >
        <select>
        <option value="fpp">First Person</option>
        <option value="tpp">Third Person</option>
        </select>
        <select>
          <option value="solo">Solo</option>
          <option value="duo">Duo</option>
          <option value="squad">Squad</option>
        </select>

        <div>
          <Dashboard stats/>

        </div>
      </div>
    )
  }

};

export default StatsContainer;