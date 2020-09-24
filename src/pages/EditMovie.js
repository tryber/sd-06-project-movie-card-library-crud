import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      shouldRedirect: false,
      movie: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchNewMovie = this.fetchNewMovie.bind(this);
  }

  componentDidMount() {
    this.fetchNewMovie();
  }

  async fetchNewMovie() {
    const id = this.props.match.params;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      isLoading: false,
    });
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      isLoading: false,
      shouldRedirect: true,
    });
  }

  render() {
    const { isLoading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        {<MovieForm movie={movie} onSubmit={this.handleSubmit} />}
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({ id: propTypes.number.isRequired }).isRequired,
  }).isRequired,
};

export default EditMovie;
