import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MovieForm, Loading } from '../components';

import { history, match } from '../types/movieDetails';

import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiLoading: true,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const { params: { id } } = this.props.match;

    const movie = await movieAPI.getMovie(id);

    this.saveState(movie);
  }

  saveState(movie) {
    this.setState({
      movie,
      apiLoading: false,
    });
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    const { push } = this.props.history;

    push('/');
  }

  render() {
    const { apiLoading, movie } = this.state;

    if (apiLoading) return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;

EditMovie.propTypes = {
  match: PropTypes.shape(match).isRequired,
  history: PropTypes.shape(history).isRequired,
};
