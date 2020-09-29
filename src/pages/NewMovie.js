import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';
import './NewMovie.css';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { shouldRedirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie);
    this.setState({ shouldRedirect: true });
  }

  render() {
    if (this.state.shouldRedirect) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h1>ADICIONAR FILME</h1>
        <div data-testid="new-movie">
          <MovieForm onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}
export default NewMovie;
