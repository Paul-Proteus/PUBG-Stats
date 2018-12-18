import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import styles from '../../../css/style.css';

class FormContainer extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange = (e) => {
    console.log('button press -->', e.target)
    this.props.onChange(e)
  };

  handleSubmit = (e) => {
    this.props.onSubmit(e)
  };

  // componentDidMount() {
  //   this.setState({
  //     labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
  //   });
  // }

  render() {
    const { username, platform, region } = this.props;
    console.log('region -->', region)
    
    return (
      <div >

        {/* <form className={styles.container} id="username-form" onSubmit={this.handleSubmit}> */}
        
        <form className={styles.container} autoComplete="off">
        <FormControl variant="outlined">

        <TextField
          id="username"
          label="username"
          value={username}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
          />
         
        <Select
            value={platform}
            onChange={this.handleChange}
            input={
              <OutlinedInput
              labelWidth={0}
              name="platform"
              value={platform}
              />
            }
            >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value={'steam'}>PC</MenuItem>
            <MenuItem value={'xbox'}>XBOX</MenuItem>

          </Select>

          <Select
            value={region}
            onChange={this.handleChange}
            id="region"
            input={
              <OutlinedInput
              labelWidth={0}
              value={region}
              id="region"
              />
            }
            >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'NA'}>NA</MenuItem>
            <MenuItem value={'EU'}>EU</MenuItem>
            <MenuItem value={'AS'}>AS</MenuItem>
            <MenuItem value={'JP'}>JP</MenuItem>
            <MenuItem value={'KRJP'}>KRJP</MenuItem>
            <MenuItem value={'RU'}>RU</MenuItem>
            <MenuItem value={'OC'}>OC</MenuItem>
            <MenuItem value={'SA'}>SA</MenuItem>
            <MenuItem value={'SEA'}>SEA</MenuItem>


          </Select>

          <Button 
            style={
              {border: "1px solid #d1d1d1",
              marginLeft: "5px"
              
            }} type="submit" onClick={this.handleSubmit} >
              Submit 
              </Button>

        </FormControl>
        </form>
        
          {/* <div >
            <input
              type="text"
              placeholder="Username"
              className={styles.formGroup}
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

          <div className="select">
              <select
              className="select"
              value={region}
              onChange={this.handleChange}
              id="region"
              >
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

        </form> */}
      </div>
    );
  }
};

export default FormContainer;