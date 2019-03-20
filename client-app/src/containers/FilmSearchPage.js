import React, {Component} from 'react';
import '../components/Films/film.scss';
import FilmList from '../components/Films/FilmList';
import SearchBar from '../components/Films/SearchBar';
import Header from '../components/Authentication/Header';
import {cities} from '../components/Films/cities';
import { connect } from "react-redux";

import {fetchFilms} from '../store/actions/searchFilmAction';

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

  render() {
    const { films } = this.props;
    console.log(films);
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
  console.log('state ', state);
  return {
    films: state.search.films ,
  //  filmsFromFirestore: state.firestore.ordered.films
  }
}

const mapDispatchToProps = {
  fetchFilms: fetchFilms
}

export default compose(
  connect( mapStateToProps, mapDispatchToProps)
/*   firestoreConnect([
    {collection: 'films'}
  ])  */
)(FilmSearchPage);