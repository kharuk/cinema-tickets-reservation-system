import React, {Component} from 'react';
import '../components/Films/film.scss';
import FilmList from '../components/Films/FilmList';
import SearchBar from '../components/Films/SearchBar';
import Header from '../components/Authentication/Header';


class FilmSearchPage extends Component {

  render() {
    return (
      <section className="page-content">
        <div className="container">
          <Header header="Film Search"/>
          <SearchBar />
          <FilmList />
        </div>
      </section>
    )
  }
}

export default FilmSearchPage;