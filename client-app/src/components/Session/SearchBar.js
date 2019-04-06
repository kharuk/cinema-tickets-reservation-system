import React, {Component} from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

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

const sites = [1, 2, 3, 4, 5];

class SearchBar extends Component {
  state = {
    count_of_sites: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes, countOfSeats, setCountOfSeats } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">

        <TextField
          id="outlined-cout-of-sites"
          select
          label="Count of sites"
          className={classes.textField}
          value={countOfSeats}
          onChange={e => setCountOfSeats(e.target.value)}
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

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);