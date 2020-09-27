import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
  }

  render() {
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
        <button type="button"><Link to="/movies/new">ADICIONAR CARTÃO</Link></button>
      </div>
    );
  }
}
export default NewMovie;
