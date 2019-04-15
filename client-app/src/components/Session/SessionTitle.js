import React from 'react';

const SessionTitle = (props) => {

    return (
      <div className="session__title_bar">
        <div className="session__icon"></div>
        <h3 className="session__title">{props.title}</h3>
      </div>
      
    )
}

export default SessionTitle;