import React from 'react';
import { Link } from 'react-router-dom';
import defaultImage from '../images/default-movie-poster.jpg';
import Tool from '../shared/Tool/Tool';
import { links } from '../config/links';
import { linkGenerator } from '../config/links';
import './ManageFilms/filmTab.scss'

const FilmInfo = props => (
  <div className="col-md-4 col-lg-3">
    <div className="uploader__aside-container" >
      <Tool
        src="/images/delete.png"
        className="uploader__aside-container-delete"
        handleClick={() => props.removeItem(props.id)}
      />
{       <Link to={linkGenerator.getFilmLink(props.id)}>
        <Tool
          src="/images/edit.png"
          className="uploader__aside-container-update"
        />
      </Link> }

      <div
        className="film-info__container"
        style={{ backgroundImage: `url(${props.film.poster_path || defaultImage})` }}
      >
        <p className="film-info__caption">{props.film.filmName}</p>
      </div>
    </div>
  </div>
);

export default FilmInfo;
