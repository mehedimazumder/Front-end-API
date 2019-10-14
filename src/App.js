import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Countries from './Countries';
import CountryCodeInfo from './CountryCodeInfo';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
     <div className="App">
       <Nav />
        <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/About" component={About} />
         <Route path="/Countries" exact component={Countries} />
         <Route path="/Countries/:code" component={CountryCodeInfo} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
