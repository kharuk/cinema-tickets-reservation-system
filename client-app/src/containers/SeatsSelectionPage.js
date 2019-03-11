import React, {Component} from 'react';
import { links } from '../config/links';
import {Link} from 'react-router-dom';
import FilmList from '../components/Films/FilmList';
import SeatSelect from '../components/SeatSelect/SeatSelect';
import Header from '../components/Authentication/Header';
import seatHelper from "../Helper/SeatHelper";
import '../components/SeatSelect/seatSelect.scss';
import seatsFromFile from '../components/SeatSelect/seats.json';


class SeatsSelectionPage extends Component {

  state={
    seatsChosen: false,
    seats: [], 
    chosenSeats: [],
    session: {}
  }

  componentDidMount() {
    let seats = seatHelper.sortSeats(seatsFromFile[0]);
    seats = seatHelper.convertSeatsArray(seats, seatHelper.getSeatsRowsNumber(seats));
    this.setState({
      seats: seats
    })
  }

  handleSeatClick = (seatInfo) =>{
    let seats = this.state.seats;
    if(!this.state.seats[seatInfo.row][seatInfo.column].booked){
      seats[seatInfo.row][seatInfo.column].chosen = !seats[seatInfo.row][seatInfo.column].chosen;
      this.setState({
        seats: seats
      });
    }

  }

  render() {

    return (
      <section className="page-content">
        <div className="container">
          <Header header="Select Sites"/>
          <SeatSelect
            seats={this.state.seats}
            // chosenSeats={this.state.chosenSeats}
            callBackHandleSeatClick={this.handleSeatClick}
          />
          <Header header="Choose something"/>
          {/*<OptionSelect />*/}
          <div className="sites-select__button-container">
            <Link 
              to={links.FILM_PAGE}
              role="button"
              className="film-page__button"
            >
              Back
            </Link>
            <Link 
              to={links.BOOKING_PAGE}
              role="button"
              className="film-page__button"
            >
              Next
            </Link>
          </div>
        </div>
      </section>
    )
  }
}

export default SeatsSelectionPage;