import React from 'react';
import CheckBox from './CheckBox';
import CountSelect from './CountSelect';

const ExtraItem= (props) =>{

  return(
    <div className="seats-scheme__container">
      <CheckBox key={props.key} label={props.label}/>
      <CountSelect />
    </div>
  );
}

export default ExtraItem;