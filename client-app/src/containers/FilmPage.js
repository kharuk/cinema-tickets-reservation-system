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
    //onsole.log(this.props.session);
  }

  render() {
    let {session} = this.props;
    console.log(session);
    return (
      <section className="page-content">
        <div className="container">
          <Header header="Sessions"/>
          <SearchBar/>
          <div className="row film-page__info">
            <div className="col-md-6 film-page__film-info">
              <FilmCard
                title={session.film.filmName}
                image={session.film.poster_path || defaultImage} 
                description={session.film.description} 
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
  session: {
    film: {
      filmName: '',
      description: '',
      poster_path: defaultImage
    }  
  }
};

const mapStateToProps = (state) => {
  console.log('state ', state);
  return {
    session: state.search.choosenFilm 
  }
}

const mapDispatchToProps = dispatch => ({
  getFilmById: (id) => dispatch(getFilmById(id))

 
})


export default connect( mapStateToProps, mapDispatchToProps)(FilmPage);