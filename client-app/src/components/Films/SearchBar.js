import React, {Component} from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import DateTimePicker from './DateTimePicker';

const styles = theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: 10
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

class SearchBar extends Component {
  state = {
    film: "",
    cinema: "",
    city: "",
    count_of_sites: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

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

        <DateTimePicker/>
        <DateTimePicker/>
      </form>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);