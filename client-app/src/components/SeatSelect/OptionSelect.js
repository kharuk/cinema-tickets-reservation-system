import React from 'react';
import ExtraItem from './ExtraItem';
import extra from './complementaryServices.json';

const OptionSelect = (props) =>{


  return(
    <div className="seats-scheme__container">
      {
        Object.keys(extra).map(function(key) {
          return <ExtraItem key={key} label={key}/>
        }) 
      }
    </div>
  );
}

export default OptionSelect;