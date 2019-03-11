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
    session: {
      info: {
        sessionSeatTypes: 
          [
            {
              typeName: 'default',
              price: 5
            },
            {
              typeName: 'vip',
              price: 10
            }
          ]
      }
    }
  }

  componentDidMount() {
    let seats = seatHelper.sortSeats(seatsFromFile[0]);
    seats = seatHelper.convertSeatsArray(seats, seatHelper.getSeatsRowsNumber(seats));
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

  render() {

    return (
      <section className="page-content">
        <div className="container">
          <Header header="Select Sites"/>
          <SeatSelect
            seats={this.state.seats}
            chosenSeats={this.state.chosenSeats}
            callBackHandleSeatClick={this.handleSeatClick}
            sessionSeatTypes={this.state.session.info.sessionSeatTypes}
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