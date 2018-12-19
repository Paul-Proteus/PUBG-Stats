import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    "flex-direction": "row",
    "justify-content": "center",
    margin: "2rem"
  },
  root: {
    margin: 0,
    border: 0,
    display: "flex",
    padding: 0,
    position: "relative",
    "min-width": 0,
    "flex-direction": "row",
    "vertical-align": "top",
  },
  textField: { 
    width: 200,
    margin: 0
  },
  btn: {
    border: '1px solid #d1d1d1',
    margin: 0
  },
  gameModeSelector: {
    display: "flex",
    "justify-content": "center"
  }
});



class FormContainerMUI extends Component {
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

  render() {
    const { username, platform, region, gameMode, tpp, lifetimeStats, classes } = this.props;
    console.log('region -->', region)
    
    return (
      <div >

        <form className={classes.container} autoComplete="off">
        <FormControl variant="outlined" className={classes.root} >

        <TextField
          className={classes.textField}
          placeholder="(case-sensitive)"
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
            <MenuItem value={'steam'}>PC</MenuItem>
            <MenuItem value={'xbox'}>XBOX</MenuItem>
          </Select>

          <Select
            value={region}
            onChange={this.handleChange}
            input={
              <OutlinedInput
              labelWidth={0}
              name="region"
              value={region}
              />
            }
            >
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
            className={classes.btn}
            type="submit" onClick={this.handleSubmit} >
              Submit 
              </Button>

        </FormControl>
        </form>

        <div className={classes.gameModeSelector}>
          <Select
              value={tpp}
              onChange={this.handleChange}
              input={
                <OutlinedInput
                disabled={lifetimeStats ? false : true}
                labelWidth={0}
                name="tpp"
                value={tpp}
                />
              }
              >

              <MenuItem value={'fpp'}>FPP</MenuItem>
              <MenuItem value={'tpp'}>TPP</MenuItem>
            </Select>

            <Select
              value={gameMode}
              onChange={this.handleChange}
              input={
                <OutlinedInput
                labelWidth={0}
                disabled={lifetimeStats ? false : true}
                name="gameMode"
                value={gameMode}
                />
              }
              >
              
              <MenuItem value={'solo'}>SOLO</MenuItem>
              <MenuItem value={'duo'}>DUO</MenuItem>
              <MenuItem value={'squad'}>SQUAD</MenuItem>

            </Select>
          </div>
      </div>
    );
  }
};

export default withStyles(styles)(FormContainerMUI);