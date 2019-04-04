import React, {Component} from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import DatePicker from './DatePicker';
import searchFilmActionHelpers from "../../helper/SearchFilmActionHelpers";

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
  },
  button: {
    margin: 20,
  },
  input: {
    display: 'none',
  },
});

class SearchBar extends Component {

  render() {
    const { classes } = this.props;
    const { 
      selectedCity, filmName, cinema, sessionDate, 
      onFilmNameChange, onCityChange, onCinemaChange, setSessionDate
    } = this.props;
    return (
      <form className={classes.container} autoComplete="off">
        <TextField
          id="outlined-film"
          label="Film"
          type="search"
          className={classes.textField}
          value={filmName || ''}
          onChange={e => onFilmNameChange(e.target.value)}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-cinema"
          label="Cinema"
          className={classes.textField}
          type="search"
          value={cinema || ''}
          onChange={e => onCinemaChange(e.target.value)}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-city"
          select
          label="City"
          className={classes.textField}
          type="search"
          value={selectedCity || ''}
          onChange={e => onCityChange(e.target.value)}
          margin="normal"
          variant="outlined"
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
        >
          {this.props.cities.map(option => (
            <MenuItem key={option} value={option}>
              {searchFilmActionHelpers.capitalizeFirstLatter(option)}
            </MenuItem>
          ))}
        </TextField>

        <DatePicker 
          setSessionDate={setSessionDate}
          sessionDate={sessionDate}
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);