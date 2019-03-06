import React, {Component} from 'react';
import { links } from '../../config/links';
import {Link} from 'react-router-dom';

class SessionItem extends Component {

  render() {

    return (
      <div className="session__item ">
        <div className="session__item_time">
          <span>14:00</span>
          <span>12/02/1999</span>
        </div>
        <div className="session__item_text">
          <span>Берестье</span>
          <span>Минск</span>
        </div>
        <Link 
          to={links.SITES_SELECTION_PAGE} 
          className="session__item__button" 
          role="button"
        >
          Бронировать
        </Link>
      </div>
    )
  }
}

export default SessionItem;