import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Navbar from './components/Navbar/Navbar'
import Error from './Pages/Error'
import Movies from './Pages/Movies'
import TVshows from './Pages/TVshows'
import Home from './Pages/Home'

function App() {
 

  return (
      <><Router>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/movies'>
              <Movies />
            </Route>
            <Route path='/tvshows'>
              <TVshows />
            </Route>
            <Route path='*'>
              <Error />
            </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
