import React, {Component} from 'react';
import { links } from '../config/links';
import {Link} from 'react-router-dom';
import FilmCard from '../components/Session/FilmCard';
import SessionInfo from '../components/Session/SessionInfo';
import Header from '../components/Authentication/Header';
import SearchBar from '../components/Session/SearchBar';


import '../components/Session/session.scss';


class FilmPage extends Component {

  render() {

    return (
      <section className="page-content">
        <div className="container">
          <Header header="Sessions"/>
          <SearchBar/>
          <div className="row film-page__info">
            <div className="col-md-6 film-page__film-info">
              <FilmCard
                title="green book" 
                image={"../images/film1.jpg"} 
                description="Cool film" 
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

export default FilmPage;