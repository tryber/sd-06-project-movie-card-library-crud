import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      status: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  async handleSubmit(newMovie) {
    await movieAPI.createMovie(newMovie);
    this.setState({ status: 'redirect' });
  }

  render() {
    const { status, movie } = this.state;

    if (status === 'redirect') {
      return <Redirect to="/" />;
    }


    return (
      <div data-testid="new-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
