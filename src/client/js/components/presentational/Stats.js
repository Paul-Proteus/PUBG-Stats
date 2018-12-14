import React, { Component } from "react";
import PropTypes from "prop-types";

const Stats = ({ stat, key }) => (
  <div key={key}>
    {stat}
  </div>
);

export default Stats;