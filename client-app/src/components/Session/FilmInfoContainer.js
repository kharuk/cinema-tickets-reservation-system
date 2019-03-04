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
              {/*props.sessions[0].cinema.name*/}
          </div>
          <div className="location">
              {/*props.sessions[0].cinema.city*/}
          </div>
        </div>
      </section>
    )
  }
}

export default FilmInfoContainer;