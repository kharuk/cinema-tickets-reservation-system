import React, {Component} from 'react';
import { links } from '../config/links';
import {Link} from 'react-router-dom';
import FilmInfoContainer from '../components/Session/FilmInfoContainer';
import SessionContainer from '../components/Session/SessionContainer';
import Header from '../components/Authentication/Header';


class FilmPage extends Component {

  render() {

    return (
      <section className="page-content">
        <div className="container">
          <Header header="Sessions"/>
          <FilmInfoContainer />
          <SessionContainer />
          <Link to={links.FILM_SEARCH_PAGE}>Back</Link>
        </div>
      </section>
    )
  }
}

export default FilmPage;