import React from "react";
import ExtraItem from "./ExtraItem";

const OptionSelect = props => {
  return (
    <div className="extra-services__container">
      {Object.keys(props.extraServices).map(function(key) {
        return (
          <ExtraItem
            key={key}
            label={key}
            price={props.extraServices[key]}
            chosenExtraServices={props.chosenExtraServices}
            callBackHandleClick={props.callBackHandleClick}
            callBackCheckBoxChanged={props.callBackCheckBoxChanged}
          />
        );
      })}
    </div>
  );
};

export default OptionSelect;
