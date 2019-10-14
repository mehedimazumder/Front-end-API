import React, {useState, useEffect} from 'react';
import './App.css';

function Country({match}) {

  useEffect(() => {
      fetchInfo();
     console.log(match);
  },[]);

  const [con, setCon] = useState({});

  const fetchInfo = async () => {
    const fetchData = await fetch(
      `https://countriesnode.herokuapp.com/v1/countries/${
        match.params.code
      }`
    );
    const con = await fetchData.json();
    setCon(con);
    console.log(con);
  };

  return (
    <div>
      <table>
        <tr>
          <th >Currency</th>
          <th>Area Code(phone)</th>
        </tr>
        <tr>
          <td>{con.currency}</td>
          <td>{con.phone}</td>
        </tr>
      </table>
    </div>
  );
}

export default Country;
