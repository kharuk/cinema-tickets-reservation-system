import React, {Component, Fragment} from 'react';
import SeatSelect from '../components/SeatSelect/SeatSelect';
import Header from '../components/Authentication/Header';
import seatHelper from "../helper/SeatHelper";
import '../components/SeatSelect/seatSelect.scss';
import sessionInfo from '../components/SeatSelect/sessionInfo.json';
import ConfirmOrder from '../components/SeatSelect/ConfirmOrder';
import { connect } from "react-redux";
import {
  getSessionById
} from '../store/actions/seatsSelectionAction';
import {
  addOrder
} from '../store/actions/orderAction';

class SeatsSelectionPage extends Component {

  state={
    isSeatsChosen: false,
    seats: [], 
    chosenSeats: [],
    chosenExtraServices: {},
    session: {
      info: sessionInfo
    }
  }

  componentDidMount() {
    this.props.getSessionById(this.props.match.params.id)
    .then(() => {
      let seats = seatHelper.sortSeats(this.props.session.sessionSeats);
      //I need to think about it
      seats.map(item => {
        item.chosen =  false;
      });
      seats = seatHelper.convertSeatsArray(seats, seatHelper.getSeatsRowsNumber(seats));
      this.setState({
        seats: seats
      })
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

  updateChosenExtraServices = (chosenExtraServices, extra, count, isSelect) => {
    if (isSelect) {
      chosenExtraServices[extra] = count;
    } else {
      delete this.state.chosenExtraServices[extra]
    }
    return chosenExtraServices;
  }

  handleExtraServicesSelect = extra => event => {
    let count = event.target.value
    this.setState({
      chosenExtraServices: this.updateChosenExtraServices(this.state.chosenExtraServices, extra, count, true)
    }) 
  }

  handleCheckBoxChanged = (extra, isSelect) => {
    this.setState({
      chosenExtraService: this.updateChosenExtraServices(this.state.chosenExtraServices, extra, 1, isSelect)
    });
  }


  handleConfirmReservation = () =>{
    this.props.addOrder(this.props.session, this.state.chosenSeats, this.state.chosenExtraServices)
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
          chosenExtraServices={this.state.chosenExtraServices}
          sessionSeatTypes={this.props.session.session_info.seat_type}
          extraServices={this.props.session.session_info.extra_services}
          callBackHandleSeatClick={this.handleSeatClick}
          callBackHandleSeatsSelect={this.handleSeatsSelect}
          callBackHandleExtraServicesSelect={this.handleExtraServicesSelect}
          callBackCheckBoxChanged={this.handleCheckBoxChanged}
          filmId={this.props.session.film.film_id}
          sessionId={this.props.match.params.id}
        />
      </Fragment>
    )
  }

  renderConfirmOrderContent = () => {
    return (
      <Fragment>
        <Header header="Info about order"/>
        <ConfirmOrder
          isSeatsChosen={this.state.isSeatsChosen}
          chosenSeats={this.state.chosenSeats}
          chosenExtraServices={this.state.chosenExtraServices}
          callBackCancelConfirm={this.handleCancelConfirm}
          callBackConfirmReservation ={this.handleConfirmReservation}
          sessionSeatTypes={this.props.session.session_info.seat_type}
          extraServices={this.props.session.session_info.extra_services}   
          sessionId={this.props.match.params.id}  
          sessionInfo={this.props.session}   
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


SeatsSelectionPage.defaultProps = {
  session: {
    session_info: {
      extra_services: {},
      seat_type: {}  
    },
    film: {
      film_id: 1
    }
  }
};

const mapStateToProps = (state) => {
  return {
    session: state.seatsSelect.session
  }
}

const mapDispatchToProps = dispatch => ({
  getSessionById: (id) => dispatch(getSessionById(id)),
  addOrder: (session, chosenSeats, extraServices) => dispatch(addOrder(session, chosenSeats, extraServices))
})

export default connect(mapStateToProps, mapDispatchToProps)(SeatsSelectionPage);;