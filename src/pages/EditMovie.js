import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      shouldRedirect: false,
      movie: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMoviesId();
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  async fetchMoviesId() {
    const { id } = this.props.match.params;
    const movieById = await movieAPI.getMovie(id);
    this.setState({
      loading: false,
      movie: movieById,
      updatedMovie: [],
    });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propTypes = { match: PropTypes.objectOf(PropTypes.object).isRequired };

export default EditMovie;
