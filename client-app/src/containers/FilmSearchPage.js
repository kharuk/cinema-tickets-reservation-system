import React, {Component} from 'react';
import '../components/Films/film.scss';
import FilmList from '../components/Films/FilmList';
import SearchBar from '../components/Films/SearchBar';
import Header from '../components/Authentication/Header';
import {cities} from '../components/Films/cities';
import { connect } from "react-redux";

import {fetchFilms} from '../store/actions/searchFilmAction';


class FilmSearchPage extends Component {

  componentDidMount() {
    this.props.fetchFilms();
  }

  render() {
    console.log(this.props.films);
    return (
      <section className="page-content">
        <div className="container">
          <Header header="Film Search"/>
          <SearchBar cities={cities} userLocation={'Minsk'}/>
          <FilmList />
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      films: state.films
  }
}

const mapDispatchToProps = {
  fetchFilms: fetchFilms
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmSearchPage);;