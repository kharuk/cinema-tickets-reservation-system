import React from 'react';
import { links } from '../../config/links';
import {Link} from 'react-router-dom';
import { linkGenerator } from '../../config/links';

const RoutingButton = (props) =>{

  const getLinkClass = (chosenSeats) => {
    if(chosenSeats.length === 0){
      return `link-disabled`;
    } else{
      return ``;
    }
  }

  const getPathForLink = (isSeatsChosen, link) => {
    if (isSeatsChosen){
      if (link === 'next') {
        return linkGenerator.getSessionPageLink(props.sessionId);
      } else {
        return linkGenerator.getSessionPageLink(props.sessionId);
      }     
    } else {
      if (link === 'next'){
        return linkGenerator.getSessionPageLink(props.sessionId);
      } else {
        return linkGenerator.getFilmPageLink(props.filmId);
      }
      
    }
  }
     
  return(
    <div className="sites-select__button-container ">
      <Link 
        to={getPathForLink(props.isSeatsChosen, 'back')} 
        onClick={props.callBackHandleCancel}
        role="button"
        className="film-page__button"
      >
        Back
      </Link>
      <Link
        to={getPathForLink(props.isSeatsChosen, 'next')}   
        onClick={props.callBackHandleConfirmation}
        role="button"
        className={`film-page__button ${getLinkClass(props.chosenSeats)}`}
      >          
        Next
      </Link>
    </div>
  );
}

export default RoutingButton;