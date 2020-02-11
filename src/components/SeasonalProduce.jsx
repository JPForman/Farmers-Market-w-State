import React from "react";
import PropTypes from "prop-types";

function SeasonalProduce(props){
  return (
    <div>
    <h3>{props.month}</h3>
    <h3>{props.selection}</h3>
  </div>
   );
}

SeasonalProduce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.string,
};

export default SeasonalProduce;
