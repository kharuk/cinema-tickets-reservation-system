import React, {Component} from 'react';
import SessionItem from './SessionItem';
import SessionTitle from './SessionTitle';


class SessionInfo extends Component {

  render() {
    let {sessions} = this.props;
    console.log(sessions);
    return (    
      <section>
          <div className="session__container">
						<SessionTitle title={"Sessions"}/>
						<div className="session__items">
              {
                sessions && 
                Object.values( sessions ).map((item) => 
                  <SessionItem session={item} key={item.id} id={item.id} />
                )
              }					
						</div>
          </div>
      </section>
    )
  }
}

export default SessionInfo;