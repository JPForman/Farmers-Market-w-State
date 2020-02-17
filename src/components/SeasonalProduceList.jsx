import React from "react";
import SeasonalProduce from "./SeasonalProduce"
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function SeasonalProduceList(props){
  return (
       <div>
         {props.SeasonalProduceList.map((produce) =>
           <SeasonalProduce month={produce.month}
             selection={produce.selection}
             key={produce.id}/>
         )}
       <Link to="/newProduce">Create Ticket</Link>
       </div>
     );
}

export default SeasonalProduceList;
