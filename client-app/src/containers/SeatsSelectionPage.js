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
import { toastr } from 'react-redux-toastr';
import reservationServices from '../services/reservationServices';
import { withRouter } from 'react-router';
import CountdownTimer from '../shared/CountdownTimer';
import { links } from '../config/links';

const showErrorToast = (err) => {
  const message = err.response && err.response.data.error ? err.response.data.error.message : `${err}`;
  toastr.error(message);
};

class SeatsSelectionPage extends Component {

  state={
    isSeatsChosen: false,
    seats: [], 
    chosenSeats: [],
    chosenExtraServices: {},
    session: {
      info: sessionInfo
    }, 
    isConfirmOrder: false
  }

  saveStateToLocalStorage = () => {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  removeStateFromLocalStorage = () => {
    console.log(this.state);
    for (let key in this.state) {
      localStorage.removeItem(key, JSON.stringify(this.state[key]));
    }
  }

  hydrateStateWithLocalStorage = () => {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }

  componentDidMount() {
    window.addEventListener("beforeunload", this.saveStateToLocalStorage);
    this.hydrateStateWithLocalStorage();
    this.props.getSessionById(this.props.match.params.id)
    .then(() => {
      let seats = seatHelper.sortSeats(this.props.session.sessionSeats);
      seats = seatHelper.convertSeatsArray(seats, seatHelper.getSeatsRowsNumber(seats));
      this.setState({
        seats: seats
      })
    })
    .catch(err => {
      console.log(err);
      showErrorToast("Something went wrong");
    })

  }

  removeBooking = () => {
    !this.state.isConfirmOrder && reservationServices.removeBooking(this.props.match.params.id, this.state.chosenSeats)
    .then((res) => {
      console.log('unmount')
    })
    .catch(error => console.log(error))
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.saveStateToLocalStorage);
    this.removeStateFromLocalStorage();
    this.removeBooking();   
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
      if ((this.state.chosenSeats.length < 5) || seatInfo.chosen) {
        reservationServices.updateSeat(this.props.match.params.id, seatInfo)
        .then(() => {
          localSeats[seatInfo.row][seatInfo.column].chosen = !localSeats[seatInfo.row][seatInfo.column].chosen;
          this.setState({
            seats: localSeats,
            chosenSeats: this.updateChosenSeats(seatInfo, this.state.chosenSeats)
          });
        })
        .catch(error => console.log(error))
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
    reservationServices.bookSessionSeats(this.props.match.params.id, this.state.chosenSeats)
    .then((res) => {
      console.log(res);
      this.props.addOrder(this.props.session, this.state.chosenSeats, this.state.chosenExtraServices);
      this.setState({
        isConfirmOrder: true
      });
    })
    .catch(error => console.log(error));
  }

  renderReservationContent = () => {
    if (!this.state.isSeatsChosen){
      return this.renderSeatsSelectContent();
    }
    else{
      return this.renderConfirmOrderContent();
    }   
  }

  delayRedirect = event => {
    const { history: { push } } = this.props;

    setTimeout(()=>push(links.FILM_SEARCH_PAGE), 3000);
  }

  handleTimer = () => {
    console.log('reload page');
    toastr.warning('The time is up');
    this.delayRedirect();
    
  //  window.location.reload();
  }

  renderSeatsSelectContent = () => {
    const time_in_minutes = 1;
    const current_time = Date.parse(new Date());
    const deadline = new Date(current_time + time_in_minutes*60*1000);
    console.log(deadline);
    return (
      <Fragment>
        <Header header="Select Seats"/>
        <CountdownTimer date={`${deadline}`} handleTimer={this.handleTimer}/>
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
          filmId={this.props.session.film._id}
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
      _id: 1
    }
  }
};

const mapStateToProps = (state) => {
  return {
    session: state.seatsSelect.session,
  }
}

const mapDispatchToProps = dispatch => ({
  getSessionById: (id) => dispatch(getSessionById(id)),
  addOrder: (session, chosenSeats, extraServices) => dispatch(addOrder(session, chosenSeats, extraServices))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SeatsSelectionPage));