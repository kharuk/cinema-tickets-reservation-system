import React, {Component} from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import DatePicker from './DatePicker';
import searchFilmActionHelpers from "../../helper/SearchFilmActionHelpers";
import AutosuggestInput from '../../shared/AutosuggestInput';
import { connect } from "react-redux";

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


const films = [
  {name: 'Green book'},
  {name: 'How to get away with murder'},
  {name: 'How to Train Your Dragon: The Hidden World'},
  {name: 'another film'},
  {name: 'something new'},
  {name: 'something  how new'},
];

const cinemas = [
  {name: 'Kiev'},
  {name: 'Berestie'},
  {name: 'Silver Screen'},
];


class SearchBar extends Component {

   renderInputComponent(inputProps) {
    const { classes, label, ...other } = inputProps;
    return (
      <TextField
        label={label}
        type="search"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        {...other}
      />
    );
  }

  render() {
    const { classes } = this.props;
    const { 
      selectedCity, sessionDate, 
      onFilmNameChange, onCityChange, onCinemaChange, setSessionDate
    } = this.props;

    return (
      <form className={classes.container} autoComplete="off">

        <AutosuggestInput
          onChange={onFilmNameChange}
          renderInputComponent={this.renderInputComponent}
          label={"Film"}
          data={films}
        />

        <AutosuggestInput
          onChange={onCinemaChange}
          renderInputComponent={this.renderInputComponent}
          label={"Cinema"}
          data={cinemas}
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

export default withStyles(styles)(SearchBar)