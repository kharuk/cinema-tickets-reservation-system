import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import moment from 'moment';

const styles = theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

const sites = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class OutlinedTextFields extends React.Component {
  state = {
    film: "",
    cinema: "",
    city: "",
    count_of_sites: "",
    chosenStartDate: moment(),
    chosenEndDate: moment().add(1, 'day')
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleChangeDate = (time) =>{
    const nextDay = moment(time);
    nextDay.add(1, 'day');
    this.setState({
        chosenStartDate: time,
        chosenEndDate: nextDay
    });
}

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-film"
          label="Film"
          type="search"
          className={classes.textField}
          value={this.state.film}
          onChange={this.handleChange("film")}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-cinema"
          label="Cinema"
          className={classes.textField}
          type="search"
          value={this.state.cinema}
          onChange={this.handleChange("cinema")}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-city"
          label="City"
          className={classes.textField}
          type="search"
          value={this.state.city}
          onChange={this.handleChange("city")}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-cout-of-sites"
          select
          label="Count of sites"
          className={classes.textField}
          value={this.state.count_of_sites}
          onChange={this.handleChange("count_of_sites")}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          helperText="Please select count of sites"
          margin="normal"
          variant="outlined"
        >
          {sites.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>



      </form>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedTextFields);