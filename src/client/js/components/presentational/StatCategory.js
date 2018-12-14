import React, { Component } from "react";
import styles from "../../../css/style.css";

const StatCategory = ({ category, key }) => (
      <div key={key}>
        {category}
      </div>
)

export default StatCategory;