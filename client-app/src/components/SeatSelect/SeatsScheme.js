import React, {Fragment} from 'react';
import SeatBox from './SeatBox';

const SeatsScheme = (props) =>{

  return(   
    <Fragment>
      <div className="scheme__container">
        {props.seatsArray.map((item) =>
          <div 
            className="row"
            key={item[0].row}>
            { item.map((itemArray) =>
              <SeatBox 
                key={itemArray._id}
                seatInfo={itemArray}
                callBackFromParent={props.callBackFromParent}
              />
            )}           
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default SeatsScheme;