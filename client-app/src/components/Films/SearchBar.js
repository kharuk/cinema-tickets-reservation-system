import React, {Component} from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import DatePicker from './DatePicker';
import { Button } from "@material-ui/core";


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
    film: "",
    cinema: "",
    city: this.props.userLocation
  };


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };


  render() {
    const { classes } = this.props;
    const { selectedCity, filmName, cinema, sessionDate, onFilmNameChange, onCityChange, onCinemaChange,
    setSessionDate, onButtonClick} = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-film"
          label="Film"
          type="search"
          className={classes.textField}
          value={filmName}
          onChange={e => onFilmNameChange(e.target.value)}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-cinema"
          label="Cinema"
          className={classes.textField}
          type="search"
          value={cinema}
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
          value={selectedCity}
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
              {option}
            </MenuItem>
          ))}
        </TextField>

{/* 
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
        </TextField> */}

        <DatePicker 
          setSessionDate={setSessionDate}
          sessionDate={sessionDate}
        />
{/*         <DateTimePicker/> */}
        <Button onClick={()=>onButtonClick(filmName, cinema, selectedCity, sessionDate)}>Search</Button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);