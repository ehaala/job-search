import React, { Component } from 'react';

import Homepage from './Homepage';
import Main from './About';
import Movie from './Contact';
import Favorites from './Favorites';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <Router>
        <div>
        <nav >
        <Link to="/">Home</Link>{' '}
         <Link to="/About">About us</Link>{' '}
         <Link to="/Contact">Contact</Link>
         <Link to="/Favorites">Saved Jobs</Link>

         
         

        </nav>
          
          <Route exact path="/" component={Homepage} />
          <Route path="/About" component={Main} />
          <Route path="/Contact" component={Movie} />
          <Route path="/Favorites" component={Favorites} />

        </div>
      </Router>
     
    )
  }
}


export default App;
