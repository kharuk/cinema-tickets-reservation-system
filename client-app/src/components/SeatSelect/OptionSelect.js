import React from 'react';
import ExtraItem from './ExtraItem';

const OptionSelect = (props) =>{


  return(
    <div className="seats-scheme__container">
      {
        Object.keys(props.extraServices).map(function(key) {
          return <ExtraItem 
                    //isSelect={false} 
                    key={key} 
                    label={key} 
                    price={props.extraServices[key]}
                   // count={props.count}
                   // isExtraServicesChosen={props.isExtraServicesChosen}
                    chosenExtraServices={props.chosenExtraServices}
                    callBackHandleClick={props.callBackHandleClick}
                    callBackCheckBoxChanged={props.callBackCheckBoxChanged}
                  />
        }) 
      }
    </div>
  );
}

export default OptionSelect;