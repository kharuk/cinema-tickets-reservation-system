import React, {Component} from 'react';
import { links } from '../config/links';
import {Link} from 'react-router-dom';
import FilmCard from '../components/Session/FilmCard';
import SessionInfo from '../components/Session/SessionInfo';
import Header from '../components/Authentication/Header';
import SearchBar from '../components/Session/SearchBar';
import { connect } from "react-redux";

import {
  getFilmById
} from '../store/actions/searchFilmAction';


import '../components/Session/session.scss';
import defaultImage from '../images/default-movie-poster.gif'


class FilmPage extends Component {

  componentDidMount() {
    this.props.getFilmById(this.props.match.params.id);
    console.log(this.props.film);
  }

  render() {
    let {film} = this.props;
    console.log(film);
    return (
      <section className="page-content">
        <div className="container">
          <Header header="Sessions"/>
          <SearchBar/>
          <div className="row film-page__info">
            <div className="col-md-6 film-page__film-info">
              <FilmCard
                title={film.name}
                image={film.image || defaultImage} 
                description={film.description} 
              />
            </div>
            <div className="col-md-6 ">
              <SessionInfo />
            </div>
          </div>
          <Link 
            to={links.FILM_SEARCH_PAGE}
            role="button"
            className="film-page__button"
          >
            Back
          </Link>
        </div>
      </section>
    )
  }
}


FilmPage.defaultProps = {
  film: {
    image: defaultImage,
    name: "",
    description: ""
  }
};

const mapStateToProps = (state) => {
  console.log('state ', state);
  return {
    film: state.search.choosenFilm 
  }
}

const mapDispatchToProps = dispatch => ({
  getFilmById: (id) => dispatch(getFilmById(id))

 
})


export default connect( mapStateToProps, mapDispatchToProps)(FilmPage);