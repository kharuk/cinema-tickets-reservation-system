import React, {Component} from 'react';
import { links } from '../config/links';
import {Link} from 'react-router-dom';
import FilmInfoContainer from '../components/Session/FilmInfoContainer';
import SessionContainer from '../components/Session/SessionContainer';
import Header from '../components/Authentication/Header';

import '../components/Session/session.scss';


class FilmPage extends Component {

  render() {

    return (
      <section className="page-content">
        <div className="container">
          <Header header="Sessions"/>
          <div className="row">
            <div className="col-md-6 ">
              <FilmInfoContainer />
            </div>
            <div className="col-md-6 ">
              <SessionContainer />
            </div>
          </div>
          <Link to={links.FILM_SEARCH_PAGE}>Back</Link>
        </div>
      </section>
    )
  }
}

export default FilmPage;