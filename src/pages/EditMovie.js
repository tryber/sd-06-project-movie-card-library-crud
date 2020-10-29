import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);

    this.state = {
      receivedMovieId: props.match.params.id,
      isLoading: true,
      shouldRedirect: false,
      movie: {},
    };
  }

  async componentDidMount() {
    const movie = await movieAPI.getMovie(this.state.receivedMovieId);
    this.fetchMovie(movie);
  }

  fetchMovie(movie) {
    this.setState({ movie, isLoading: false });
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { isLoading, shouldRedirect, movie } = this.state;

    if (shouldRedirect) {
      return <Redirect path="/" />;
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

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
