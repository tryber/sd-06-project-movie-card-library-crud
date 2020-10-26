import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as movieApi from '../services/movieAPI';

import MovieForm from '../components/MovieForm';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieApi.createMovie(newMovie);
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) return <Redirect to="/" />;
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
