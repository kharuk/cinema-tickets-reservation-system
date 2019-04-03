import React, {Component} from 'react';
import { links } from '../../config/links';
import {Link} from 'react-router-dom';
import { linkGenerator } from '../../config/links';
import searchFilmActionHelpers from '../../helper/SearchFilmActionHelpers';

class SessionItem extends Component {

  render() {
    let {session} = this.props;
    console.log(session.date);
    const time = searchFilmActionHelpers.getTimeFromDate(session.date);
    const date = searchFilmActionHelpers.getFormatedDate(session.date);
    console.log('time', time);
    console.log('date', date);
    return (
      <div className="session__item ">
        <div className="session__item_time">
          <span>{time}</span>
          <span>{date}</span>
        </div>
        <div className="session__item_text">
          <span>{session.cinema.cinemaName}</span>
          <span>{session.cinema.location}</span>
        </div>
        <Link 
          to={linkGenerator.getSessionPageLink(this.props.id)}
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