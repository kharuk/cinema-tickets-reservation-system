import React, {Component } from "react";
import moment from 'moment';
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";

class Picker extends Component {

/*     state = {
      selectedDate: new Date(),
      handleDateChange: new Date(),
    } */

    setMaxDate = (time) => {
      const nextDay = moment(time);
      return nextDay.add(1, 'month');
    }

/*     handleChangeDate = (time) =>{
      this.setState({
        selectedDate: time
      });
  } */


    render(){
      const {setSessionDate, sessionDate} = this.props
      return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <div className="pickers date-timer-picker_margin">
            <DatePicker 
              value={sessionDate} 
              onChange={date => setSessionDate(date)} 
              disablePast
              maxDate={this.setMaxDate(sessionDate)}
            />
          </div>
        </MuiPickersUtilsProvider>
      );  
    }
      
}

export default Picker;