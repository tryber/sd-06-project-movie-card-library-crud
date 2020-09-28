import React, { Component } from 'react';
import { 
  Route,
  Link,
  BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import MovieList from './pages/MovieList'
import movies from './services/movieData'


class App extends Component {
  render() {
  return ( 
    <Router>
     <div className="app">
     
       <div>Movie Card Library CRUD</div>
       
     
    </div>
    </Router>
  )
}
}
export default App;
