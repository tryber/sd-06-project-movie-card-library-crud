import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Switch } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
          <Link to={'/movies/new'}>ADICIONAR CARTÃO</Link>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Header;
