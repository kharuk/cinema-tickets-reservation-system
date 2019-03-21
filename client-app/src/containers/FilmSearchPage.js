import React, {Component} from 'react';
import '../components/Films/film.scss';
import FilmList from '../components/Films/FilmList';
import SearchBar from '../components/Films/SearchBar';
import Header from '../components/Authentication/Header';
import {cities} from '../components/Films/cities';
import { connect } from "react-redux";

import {fetchFilms, 
  setCurrentCity,
  setCurrentFilmName,
  setCurrentCinema,
  setSessionDate,
  getFiltredFilmList
} from '../store/actions/searchFilmAction';

import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


class FilmSearchPage extends Component {

  state = {
    tempfilms: null
  }

  componentDidMount() {
   // debugger;
    this.props.fetchFilms();

  }

  setCurrentFilmName = (filmName) => {
    this.props.setCurrentFilmName(filmName);
  }
  
  setCurrentCity = (city) => {
    this.props.setCurrentCity(city);
  }
  
  setCurrentCinema = (cinema) => {
    this.props.setCurrentCinema(cinema);
  }

  setSessionDate = (date) => {
    this.props.setSessionDate(date);
  }

  onButtonClick = (filmName, cinema, city, date) => {
    console.log('clicked');
    this.props.getFiltredFilmList(filmName, cinema, city, date)
  }

/*   searchBarHandler = (cinema, city) => {
    console.log('onSubmit');
    this.props.setCurrentCinema(cinema);
    this.props.setCurrentCity(city)

  } */

  render() {
    const { films, selectedCity, filmName, cinema, sessionDate } = this.props;
    console.log('films', films);
    return (
      <section className="page-content">
        <div className="container">
          <Header header="Film Search"/>
          <SearchBar 
            cities={cities} 
            userLocation={'Minsk'}
            selectedCity={selectedCity}
            filmName={filmName}
            cinema={cinema}
            sessionDate={sessionDate}
            onFilmNameChange={this.setCurrentFilmName}
            onCityChange={this.setCurrentCity}
            onCinemaChange={this.setCurrentCinema}
            setSessionDate={this.setSessionDate}
            onButtonClick={this.onButtonClick}

           // onSubmit={this.searchBarHandler}
          />
          <FilmList filmList={films} />
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state ', state);
  return {
    films: state.search.films ,
    selectedCity: state.search.selectedCity ,
    filmName: state.search.filmName ,
    cinema: state.search.cinema,
    sessionDate: state.search.sessionDate 
  //  filmsFromFirestore: state.firestore.ordered.films
  }
}

const mapDispatchToProps = {
  fetchFilms: fetchFilms,
  setCurrentFilmName: setCurrentFilmName,
  setCurrentCity: setCurrentCity,
  setCurrentCinema: setCurrentCinema,
  setSessionDate: setSessionDate,
  getFiltredFilmList: getFiltredFilmList

 
}

export default compose(
  connect( mapStateToProps, mapDispatchToProps)
/*   firestoreConnect([
    {collection: 'films'}
  ])  */
)(FilmSearchPage);