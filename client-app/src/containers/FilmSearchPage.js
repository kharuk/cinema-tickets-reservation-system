import React, {Component} from 'react';
import '../components/Films/film.scss';
import FilmList from '../components/Films/FilmList';
import SearchBar from '../components/Films/SearchBar';
import Header from '../components/Authentication/Header';
import {cities} from '../components/Films/cities';
import { connect } from "react-redux";
import {getFiltredFilms} from '../store/selectors';
import {
  fetchFilms, 
  setCurrentCity,
  setCurrentFilmName,
  setCurrentCinema,
  setSessionDate
} from '../store/actions/searchFilmAction';


class FilmSearchPage extends Component {

  componentDidMount() {
    this.props.setCurrentCity(this.props.userLocation);
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

  render() {
    const {filtredFilms, selectedCity, filmName, cinema, sessionDate } = this.props;
    
    return (
      <section className="page-content">
        <div className="container">
          <Header header="Film Search"/>
          <SearchBar 
            cities={cities} 
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
  return {
    films: state.search.films,
    filtredFilms: getFiltredFilms(state.search),
    selectedCity: state.search.filters.selectedCity ,
    filmName: state.search.filters.filmName ,
    cinema: state.search.filters.cinema,
    sessionDate: state.search.filters.sessionDate,
    userLocation: state.user.userLocation,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchFilms: () => dispatch(fetchFilms()),
  setCurrentFilmName: (filmName) => dispatch(setCurrentFilmName(filmName)),
  setCurrentCity: (city) => dispatch(setCurrentCity(city)),
  setCurrentCinema: (cinema) => dispatch(setCurrentCinema(cinema)),
  setSessionDate: (date) => dispatch(setSessionDate(date)),
})


export default connect(mapStateToProps, mapDispatchToProps)(FilmSearchPage);