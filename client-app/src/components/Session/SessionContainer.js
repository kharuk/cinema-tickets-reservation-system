import React, {Component} from 'react';
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
      </section>
    )
  }
}

export default SessionContainer;