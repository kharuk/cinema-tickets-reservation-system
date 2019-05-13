import React from 'react';
import { Link } from 'react-router-dom';
import defaultImage from '../images/default-movie-poster.jpg';

const FilmInfo = props => (
  <div className="col-md-4 col-lg-3">
      <div
        className="film-info__container"
        style={{ backgroundImage: `url(${props.film.poster_path || defaultImage})` }}
      >
        <p className="film-info__caption">{props.film.filmName}</p>
      </div>
  </div>
);

export default FilmInfo;
