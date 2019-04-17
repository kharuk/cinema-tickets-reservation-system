import React, { Component } from 'react';

class ChosenSeatInfoBox extends Component {
  render() {
    return (
      <div className="seat-info__box">
        <div>
          Row {this.props.seatInfo.row + 1} / Seat {this.props.seatInfo.column + 1}
        </div>
        <div>Type : {this.props.seatInfo.type}</div>
        <div>Price : {this.props.price}</div>
      </div>
    );
  }
}
export default ChosenSeatInfoBox;
