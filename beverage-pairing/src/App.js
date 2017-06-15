import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,Switch,NavLink
} from 'react-router-dom';

import Head from './components/Header';
import Footer from './components/Footer';
import Beers from './components/Beers';
import Wines from './components/Wines';
import Waters from './components/Waters';
import Coffee from './components/Coffee';
import Home from './components/Home';
import Contact from './components/Contact';



const homes = {
  border:'solid black',
  padding: 5,
  height: 500,
  width: 750,
  margin: 'auto'
}

const beerss = {
  margin:'auto'
}


// axios.get('http://api.brewerydb.com/v2/beers?key=307bec8dc3f9b5248e26af12dfce97d6&name=' + name)









class App extends Component {
  render() {
    return (
      <div>
      <Head/>
      <Router>

        <div id="wrapper">
        {/*<NavLink to="/beers">beers</NavLink>&nbsp;&nbsp;
        <NavLink to="/wines">wines</NavLink>&nbsp;&nbsp;
        <NavLink to="/coffee">coffee</NavLink>&nbsp;&nbsp;
        <NavLink to="/water">water</NavLink>&nbsp;&nbsp;
        <NavLink to="/">home</NavLink>&nbsp;&nbsp;*/}
        
        <Switch>
        <Route path="/beers" exact component={Beers}></Route>
        <Route path="/wines" exact component={Wines}></Route>
        <Route path="/coffee" exact component={Coffee}></Route>
        <Route path="/water" exact component={Waters}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/" exact component={Home}></Route>
       
        </Switch>
        
        </div>

      </Router>
      </div>
    );
  }
}

export default App;
