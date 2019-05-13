import React from 'react';
import FilmItem from './FilmItem';
import { Link } from 'react-router-dom';
import { links } from '../config/links';

const FilmInfoContainer = props => (
  <div className="row">
    <div className="col-md-12 ">
      <div className="row film-tab__button-create">
        <Link to={links.ADD_FILM} className="film-tab__button">Add Film</Link>
      </div>
      <div className="row">
        {props.filmList
          && Object.values(props.filmList).map(
            item => <FilmItem film={item.film_info} key={item._id} id={item._id} />,
          )}
      </div>
    </div>
  </div>
);

export default FilmInfoContainer;