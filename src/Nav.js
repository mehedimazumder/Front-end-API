import React from 'react';
import './App.css';
import {Link} from  'react-router-dom';
function Nav() {

  const navStyle ={
    color: '#17d2c4',
    textDecoration : 'none'
  }
  
  return (
    <nav>
      <h3>TEST</h3>
      <ul className="nav-links">
        <Link style={navStyle} to='/about'>
          <li>About</li>
        </Link>
        <Link style={navStyle} to='/countries'>
          <li>Countries</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
