import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './services/Routes';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Routes />
    </Router>
  );
}

export default App;
