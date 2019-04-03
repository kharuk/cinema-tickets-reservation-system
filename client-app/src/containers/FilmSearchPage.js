import React, {Component} from 'react';
import '../components/Films/film.scss';
import FilmList from '../components/Films/FilmList';
import SearchBar from '../components/Films/SearchBar';
import Header from '../components/Authentication/Header';
import {cities} from '../components/Films/cities';
import { connect } from "react-redux";
import searchFilmActionHelpers from '../helper/SearchFilmActionHelpers';

import {
  fetchFilms, 
  setCurrentCity,
  setCurrentFilmName,
  setCurrentCinema,
  setSessionDate,
  getFiltredFilmList
} from '../store/actions/searchFilmAction';

import { compose } from 'redux';


class FilmSearchPage extends Component {

  state = {
    tempfilms: null
  }

  componentDidMount() {
    this.props.setCurrentCity(this.props.userLocation);
    this.props.fetchFilms(this.props.selectedCity, this.props.sessionDate);
    
  }

  setCurrentFilmName = (filmName) => {
    this.props.setCurrentFilmName(filmName);
   // this.props.getFiltredFilmList(this.props.films, filmName, this.props.cinema, this.props.selectedCity, this.props.sessionDate)
  }
  
  setCurrentCity = (city) => {
    this.props.setCurrentCity(city);
  //  this.props.getFiltredFilmList(this.props.films, this.props.filmName, this.props.cinema, city, this.props.sessionDate)
  }
  
  setCurrentCinema = (cinema) => {
    this.props.setCurrentCinema(cinema);
  //  this.props.getFiltredFilmList(this.props.films, this.props.filmName, cinema, this.props.selectedCity, this.props.sessionDate)
  }

  setSessionDate = (date) => {
    this.props.setSessionDate(date);
  //  this.props.getFiltredFilmList(this.props.films, this.props.filmName, this.props.cinema, this.props.selectedCity, date)
  }

  render() {
    const { films,filtredFilms, selectedCity, filmName, cinema, sessionDate } = this.props;
    console.log('films', films);
    console.log('filtredFilms', filtredFilms);
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
          />
          <FilmList filmList={filtredFilms} />
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state ', state);
  let filters = {
    filmName: state.search.filmName,
    city: state.search.selectedCity,
    cinema: state.search.cinema,
    date: state.search.sessionDate
  }
  return {
    films: state.search.films,
    filtredFilms: searchFilmActionHelpers.getFilteredData(state.search.films, filters), // state.search.filtredData, //selector add function
    selectedCity: state.search.selectedCity ,
    filmName: state.search.filmName ,
    cinema: state.search.cinema,
    sessionDate: state.search.sessionDate,
    userLocation: state.user.userLocation
  }
}

const mapDispatchToProps = dispatch => ({
  fetchFilms: (city, date) => dispatch(fetchFilms(city, date)),
  setCurrentFilmName: (filmName) => dispatch(setCurrentFilmName(filmName)),
  setCurrentCity: (city) => dispatch(setCurrentCity(city)),
  setCurrentCinema: (cinema) => dispatch(setCurrentCinema(cinema)),
  setSessionDate: (date) => dispatch(setSessionDate(date)),
  getFiltredFilmList: (sessions, filmName, cinema, city, date) => dispatch(getFiltredFilmList(sessions, filmName, cinema, city, date))

 
})


export default compose(
  connect( mapStateToProps, mapDispatchToProps)
)(FilmSearchPage);