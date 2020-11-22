import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchMovieForEdition(id);
  }

  async fetchMovieForEdition(id) {
    this.setState({ status: 'loading' }, async () => {
      const requestReturn = await movieAPI.getMovie(id);
      this.setState({
        status: 'ready',
        movie: requestReturn,
      });
    });
  }

  async handleSubmit(updatedMovie) {
    // call API to update movie and redirect to main page
    await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return (<Redirect to="/" />);
    }

    if (status === 'loading') {
      // render Loading
      return (
        <Loading />
      );
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
      id: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
};

export default EditMovie;
