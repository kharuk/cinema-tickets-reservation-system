import React, {Component} from 'react';
import { links } from '../config/links';
import {Link} from 'react-router-dom';
import FilmCard from '../components/Session/FilmCard';
import SessionInfo from '../components/Session/SessionInfo';
import Header from '../components/Authentication/Header';
import SearchBar from '../components/Session/SearchBar';
import { connect } from "react-redux";
import {getChosenFilm} from '../store/selectors';
import {
  setChosenFilm
} from '../store/actions/searchFilmAction';


import '../components/Session/session.scss';
import defaultImage from '../images/default-movie-poster.gif'


class FilmPage extends Component {

  componentDidMount() {
    this.props.setChosenFilm(this.props.match.params.id);
  }

  render() {
    let {film} = this.props;
    return (
      <section className="page-content">
        <div className="container">
          <Header header="Sessions"/>
          <SearchBar/>
          <div className="row film-page__info">
            <div className="col-md-6 film-page__film-info">
              <FilmCard
                title={film.film_info.filmName}
                image={film.film_info.poster_path || defaultImage} 
                description={film.film_info.description} 
              />
            </div>
            <div className="col-md-6 ">
              <SessionInfo sessions={film.sessions}/>
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
    film_info: {
      filmName: '',
      description: '',
      poster_path: defaultImage
    } ,
    sessions: []
  }
};

const mapStateToProps = (state) => {
  return {
    film: getChosenFilm(state.search)
  }
}

const mapDispatchToProps = dispatch => ({
  setChosenFilm: (id) => dispatch(setChosenFilm(id))
})


export default connect( mapStateToProps, mapDispatchToProps)(FilmPage);