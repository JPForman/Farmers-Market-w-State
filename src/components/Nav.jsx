import React from "react";

function Nav(){
  return (
    <div className="nav">
      <table className="nav-links">
        <tr>
          <th>Forum</th>
          <th>About us</th>
          <th>Upcoming Events</th>
        </tr>
      </table>
      <p> </p>
      <input type='text' placeholder='Search' />
    </div>
  );
}

export default Nav;
