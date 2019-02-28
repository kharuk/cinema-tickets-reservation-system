import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { links } from '../config/links';


class FilmSearchPage extends Component {

  render() {
    return (
      <section className="page-content">
        <h1 style={{width: '100%'}}> here will be all films and search</h1>
        <ul style={{width: '100%'}}>
          <Link to={links.FILM_PAGE}><li>Film 1</li></Link>
          <Link to={links.FILM_PAGE}><li>Film 2</li></Link>
          <Link to={links.FILM_PAGE}><li>Film 3</li></Link>
          <Link to={links.FILM_PAGE}><li>Film 4</li></Link>
        </ul>
      </section>
    )
  }
}

export default FilmSearchPage;