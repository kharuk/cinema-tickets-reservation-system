import React from 'react';
import { links } from '../../config/links';
import {Link} from 'react-router-dom';

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
        return links.ORDERS_PAGE;
      } else {
        return links.SITES_SELECTION_PAGE;
      }     
    } else {
      if (link === 'next'){
        return links.SITES_SELECTION_PAGE;
      } else {
        return links.FILM_PAGE;
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