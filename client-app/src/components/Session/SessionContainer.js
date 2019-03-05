import React, {Component} from 'react';
import { links } from '../../config/links';
import {Link} from 'react-router-dom';
import SessionItem from './SessionItem';
import SessionTitle from './SessionTitle';


class SessionContainer extends Component {

  render() {

    return (
      <section>
          <div className="session__container">
						<SessionTitle title={"Sessions"}/>
						<div className="session__items">					
              <SessionItem />
              <SessionItem />
              <SessionItem />
              <SessionItem />
              <SessionItem />
						</div>
          </div>
          <Link to={links.SITES_SELECTION_PAGE}><li>Сеанс 1</li></Link>
      </section>
    )
  }
}

export default SessionContainer;