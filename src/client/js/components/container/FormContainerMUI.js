import React, { Component } from "react";
import Input from "../presentational/Input.js";
import Region from "../presentational/Region.js";
import styles from '../../../css/style.css';

class FormContainerMUI extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange = (e) => {
    this.props.onChange(e)
  };

  handleSubmit = (e) => {
    this.props.onSubmit(e)
  };

  render() {
    const { username, platform, region } = this.props;

    return (
      <div >

        <form className={styles.container} id="username-form" onSubmit={this.handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              placeholder="Username"
              className={styles.form}
              id="username"
              value={username}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="platform-selector-div">
              <select
              value={platform}
              onChange={this.handleChange}
              id="platform"
              >
                <option value="steam">PC</option>
                <option value="Xbox">Xbox</option>
              </select>
          </div>

          <div className="region-selector-div">
              <select
              value={region}
              onChange={this.handleChange}
              id="region"
              >
                <option value="">Select Region:</option>
                <option value="NA">NA</option>
                <option value="EU">EU</option>
                <option value="AS">AS</option>
                <option value="JP">JP</option>
                <option value="KRJP">KRJP</option>
                <option value="RU">RU</option>
                <option value="OC">OC</option>
                <option value="SA">SA</option>
                <option value="SEA">SEA</option>
              </select>
          </div>

        <button type="Submit" onClick={this.handleSubmit}> Submit </button>
        </form>
      </div>
    );
  }
};

export default FormContainerMUI;