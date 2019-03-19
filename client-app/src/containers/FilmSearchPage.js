import React, {Component} from 'react';
import '../components/Films/film.scss';
import FilmList from '../components/Films/FilmList';
import SearchBar from '../components/Films/SearchBar';
import Header from '../components/Authentication/Header';
import {cities} from '../components/Films/cities';


class FilmSearchPage extends Component {

  render() {
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

export default FilmSearchPage;