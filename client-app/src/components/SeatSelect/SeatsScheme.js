import React, {Fragment} from 'react';
import SeatBox from './SeatBox';

const SeatsScheme = (props) =>{

    const generateKey = (row, column) =>{
        return row * props.seatsArray[0].length + column;
    }

    return(
      
        <Fragment>
            <div className="scheme-container">
                {props.seatsArray.map((item) =>
                    <div 
                        className="row"
                        key={item[0].row}>
                        { item.map((itemArray) =>
                            <SeatBox 
                                key={generateKey(itemArray.row, itemArray.column)}
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