import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Countries() {

  const linkStyle = {
    color : 'RED',
    textDecoration : 'none',

  }
  const bor = {
    border : '1px solid green',
    margin:'0 auto',
    padding: '5px 10px',
    maxHeight:  'auto',
    maxWidth: '50%'
  }
  useEffect(() => {
    fetchcons();
  }, []);

  const [cons, setCons] = useState([]);

  const fetchcons = async () => {
    const data = await fetch(
      'https://countriesnode.herokuapp.com/v1/countries'
    );
    const cons = await data.json();
    console.log(cons.cons);
    setCons(cons);
  };

  return (
    <div>
      {cons.map(con => (
        <ul>
          <li style = {bor}  key = {con.name}>
            <strong>Name:</strong> <Link style={linkStyle} to={`/countries/${con.code}`}>{con.name}</Link><br/>
            <strong>Languages:</strong> {con.languages}<br/>
            <strong>Native</strong>: {con.native}<br/>
            <strong>Continent:</strong> {con.continent}<br/>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Countries;
