import React from 'react';
var NavLink = require('react-router-dom').NavLink;

function Nav () {
  return(
    <div>
      <ul className="navList">
        <li key={"home"}><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li key={"laugh"}><NavLink activeClassName="active" to="/laugh">I need a laugh</NavLink></li>
        <li key={"resources"}><NavLink activeClassName="active" to="/coding_resources">Coding Resources</NavLink></li>
        <li key={"benefits"}><NavLink activeClassName="active" to="/stand_up">Benefits of taking breaks</NavLink></li>
      </ul>
    </div>
  )
}

export default Nav;