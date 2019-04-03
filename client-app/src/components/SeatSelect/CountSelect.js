import React, {Component} from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  textField: {
    margin: 0,
    marginLeft: 5,
    marginRight: 5,
    width: '60px',
    height: '30px',
    marginTop: 10
  },
  select: {
    padding: 0
  },
  
});

const count = [1, 2, 3, 4, 5];

class CountSelect extends Component {

  render() {
    const { classes } = this.props;

    return (
      <TextField
        id="outlined-cout-of-addition"
        select
        label="Count"
        className={classes.textField}
        value={this.props.value||1}
        onChange={this.props.callBackHandleClick}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        margin="normal"
        variant="outlined"
        classes={{
          input: classes.select,
        }} 
      >
        {count.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

    );
  }
}

CountSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CountSelect);