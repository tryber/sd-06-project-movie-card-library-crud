import React, { Component } from 'react';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
    this.disableLoadingMessage = this.disableLoadingMessage.bind(this);

    this.state = {
      isLoading: true,
      shouldRedirect: false,
    };
  }

  handleSubmit(updatedMovie) {
  }

  disableLoadingMessage() {
    this.setState({ isLoading: false });
  }

  fetchMovie(movie) {
    this.setState({ movie });
  }

  async componentDidMount() {
    const movie = await movieAPI.getMovie(this.state.receivedMovieId);
    this.disableLoadingMessage();
    this.fetchMovie(movie);
  }

  render() {
    const { isLoading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
