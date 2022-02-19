import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ProfilListing from './components/ProfilListing';
import Search from './components/Search';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Search/>
      <Switch>
        <Route exact path='/' component={ProfilListing}/>
      </Switch>
    </Router>
  );
}

export default App;