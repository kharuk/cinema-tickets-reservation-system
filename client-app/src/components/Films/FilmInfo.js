import React from 'react';
import {Link} from 'react-router-dom';
import { links } from '../../config/links';

const FilmInfo = () => (
  <div className="col-md-4 col-lg-3">
    <Link to={links.FILM_PAGE}>
      <div className="film-info__container">
        <p className="film-info__caption">Name of the film</p>
      </div>     
    </Link>
  </div>
)

export default FilmInfo;