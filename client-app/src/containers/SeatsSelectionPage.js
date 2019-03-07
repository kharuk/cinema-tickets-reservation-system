import React, {Component} from 'react';
import { links } from '../config/links';
import {Link} from 'react-router-dom';
import FilmList from '../components/Films/FilmList';
import SeatSelect from '../components/SeatSelect/SeatSelect';
import Header from '../components/Authentication/Header';

import '../components/SeatSelect/seatSelect.scss';
import seatsFromFile from '../components/SeatSelect/seats.json';


class SeatsSelectionPage extends Component {

  getSeatsRowsNumber = (seats) =>{
      return seats[seats.length - 1].row + 1;
  }

  getSeatsColumnsNumber = (seats) =>{
      return seats[seats.length - 1].column + 1;
  }

  componentDidMount() {
    let seats = this.sortSeats(seatsFromFile[0]);
    seats = this.convertSeatsArray(seats, this.getSeatsRowsNumber(seats), this.getSeatsColumnsNumber(seats));
    this.setState({
      seats: seats
    })
  }

  sortSeats = (seats) =>{
    return seats.sort((a, b) => {
      if (a.row === b.row){
        if (a.column > b.column){
            return 1;
        }
        if (a.column < b.column){
            return -1;
        } 
        return 0;
      }
      if (a.row > b.row){
        return 1;
      }
      return -1;
    });
  }


  convertSeatsArray = (seats, rows, columns) =>{
    let seatsArray = [];
    for (let i = 0; i < rows; i++){
        seatsArray[i] = [];
        for (let j = 0; j < columns; j++) {
            seatsArray[i].push(seats[i * columns + j]);
        }
    }
    return seatsArray;
  }

  state={
    seatsChosen: false,
    seats: [], 
    chosenSeats: [],
    session: {}
  }


  handleSeatClick = (seatInfo) =>{
    seatInfo.chosen = !seatInfo.chosen;

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
          />
          <Header header="Choose something"/>
          {/*<OptionSelect />*/}
          <div className="sites-select__button-container">
            <Link 
              to={links.FILM_SEARCH_PAGE}
              role="button"
              className="film-page__button"
            >
              Back
            </Link>
            <Link 
              to={links.FILM_SEARCH_PAGE}
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