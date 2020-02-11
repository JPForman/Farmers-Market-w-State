import React from "react";
import PropTypes from "prop-types";
import SeasonalProduceList from "./SeasonalProduceList"

function SeasonalProduce(props){
  return (
    <div className="bazaarStock">
    <h3>{props.month}</h3>
    {props.selection.map((produce) =>
      <li>{produce}</li>
    )}
  </div>
   );
}

SeasonalProduce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.string,
};

export default SeasonalProduce;
