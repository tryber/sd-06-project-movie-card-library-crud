import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Index from './components/index';

function App() {
  return (
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  );
}

export default App;
