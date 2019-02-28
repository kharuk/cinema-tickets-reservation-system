import React, {Component} from 'react';
import { links } from '../config/links';
import {Link} from 'react-router-dom';


class FilmPage extends Component {

  render() {

    return (
      <section className="page-content">
        <h1 style={{width: '100%'}}> concret film</h1>
        <h2 style={{width: '100%'}}> Возможные сеансы</h2>
        <ul style={{width: '100%'}}>
          <Link to={links.SITES_SELECTION_PAGE}><li>Сеанс 1</li></Link>
          <Link to={links.SITES_SELECTION_PAGE}><li>Сеанс 2</li></Link>
          <Link to={links.SITES_SELECTION_PAGE}><li>Сеанс 3</li></Link>
          <Link to={links.SITES_SELECTION_PAGE}><li>Сеанс 4</li></Link>
        </ul>
        <Link to={links.FILM_SEARCH_PAGE}>Back</Link>
      </section>
    )
  }
}

export default FilmPage;