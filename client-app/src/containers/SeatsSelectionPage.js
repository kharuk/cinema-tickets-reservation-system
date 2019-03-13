import React, {Component, Fragment} from 'react';
import SeatSelect from '../components/SeatSelect/SeatSelect';
import Header from '../components/Authentication/Header';
import seatHelper from "../helper/SeatHelper";
import '../components/SeatSelect/seatSelect.scss';
import seatsFromFile from '../components/SeatSelect/seats.json';
import sessionInfo from '../components/SeatSelect/sessionInfo.json';
import ConfirmOrder from '../components/SeatSelect/ConfirmOrder';

class SeatsSelectionPage extends Component {

  state={
    isSeatsChosen: false,
    seats: [], 
    chosenSeats: [],
    session: {
      info: sessionInfo
    }
  }

  componentDidMount() {
    let seats = seatHelper.sortSeats(seatsFromFile[0]);
    seats.map(item => {
      item.chosen =  false;
    });
    seats = seatHelper.convertSeatsArray(seats, seatHelper.getSeatsRowsNumber(seats));
    console.log(seats);
    this.setState({
      seats: seats
    })

  }

  updateChosenSeats = (seatInfo, chosenSeats) => {
    if(seatInfo.chosen){
      chosenSeats.push(seatInfo);
    } else {
      chosenSeats.splice(chosenSeats.findIndex( el => el.row === seatInfo.row && el.column === seatInfo.column),1);
    }
    return chosenSeats;
  }

  handleSeatClick = (seatInfo) =>{
    let localSeats = [...this.state.seats];
    if(!this.state.seats[seatInfo.row][seatInfo.column].booked){
      if(this.state.chosenSeats.length < 5) {
        localSeats[seatInfo.row][seatInfo.column].chosen = !localSeats[seatInfo.row][seatInfo.column].chosen;
        this.setState({
          seats: localSeats,
          chosenSeats: this.updateChosenSeats(seatInfo, this.state.chosenSeats)
        });
      } else if (seatInfo.chosen) {
        localSeats[seatInfo.row][seatInfo.column].chosen = !localSeats[seatInfo.row][seatInfo.column].chosen;
        this.setState({
          seats: localSeats,
          chosenSeats: this.updateChosenSeats(seatInfo, this.state.chosenSeats)
        });
      }
    }
  }

  handleCancelConfirm = () =>{
    this.setState({
        isSeatsChosen: false
    })
  }

  handleSeatsSelect = () =>{
    this.setState({
        isSeatsChosen: true
    })
}

  handleConfirmReservation = () =>{

  }

  renderReservationContent = () => {
    if (!this.state.isSeatsChosen){
      return this.renderSeatsSelectContent();
    }
    else{
      return this.renderConfirmOrderContent();
    }   
  }

  renderSeatsSelectContent = () => {
    return (
      <Fragment>
        <Header header="Select Seats"/>
          <SeatSelect
            seats={this.state.seats}
            chosenSeats={this.state.chosenSeats}
            callBackHandleSeatClick={this.handleSeatClick}
            callBackHandleSeatsSelect={this.handleSeatsSelect}
            sessionSeatTypes={this.state.session.info.SEAT_TYPE}
          />
      </Fragment>
    )
  }

  renderConfirmOrderContent = () => {
    return (
      <Fragment>
        <Header header="Info about order"/>
          <ConfirmOrder
            chosenSeats={this.state.chosenSeats}
            sessionSeatTypes={this.state.session.info.SEAT_TYPE}
            callBackCancelConfirm={this.handleCancelConfirm}
            isSeatsChosen={this.state.isSeatsChosen}
          />
      </Fragment>
    )
  }

  render() {
    return (
      <section className="page-content">
        <div className="container">
          {this.renderReservationContent()}
        </div>
      </section>
    )
  }
}

export default SeatsSelectionPage;