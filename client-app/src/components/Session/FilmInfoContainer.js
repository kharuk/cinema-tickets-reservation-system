import React, {Component} from 'react';
import { links } from '../../config/links';
import {Link} from 'react-router-dom';
import Header from '../Authentication/Header';


class FilmInfoContainer extends Component {

  render() {

    return (
      <section>
        <div className="cinema-info">
          <div className="heading">
          </div>
          <div className="location">
          </div>
        </div>
      </section>
    )
  }
}

export default FilmInfoContainer;