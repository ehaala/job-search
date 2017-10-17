import React, { Component } from 'react';

import Homepage from './Homepage';
import Main from './Main';
import Movie from './Movie';
import Food from './Food';
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
         <Link to="/Main">See Our Main blog</Link>{' '}
         <Link to="/Movie">See Our Movie blog!</Link>
         <Link to="/Food">See Our Food blog!</Link>

         <Link to="/Favorites">Favorites!</Link>

         
         

        </nav>
          
          <Route exact path="/" component={Homepage} />
          <Route path="/main" component={Main} />
          <Route path="/movie" component={Movie} />
          <Route path="/food" component={Food} />
          <Route path="/Favorites" component={Favorites} />

        </div>
      </Router>
     
    )
  }
}


export default App;
