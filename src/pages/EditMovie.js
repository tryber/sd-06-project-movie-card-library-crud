import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      redirectToInitialPage: false,
      movieToEdit: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getMyMovieInformation(id);
  }

  async getMyMovieInformation(id) {
    this.setState(
      { loading: true },
      async () => {
        const movieToEdit = await movieAPI.getMovie(id);
        this.setState(
          { loading: false,
            redirectToInitialPage: false,
            movieToEdit,
          });
      });
  }

  async handleSubmit(updatedMovie) {
    this.setState(
      { loading: true },
      async () => {
        await movieAPI.updateMovie(updatedMovie);
        this.setState(
          { loading: false,
            redirectToInitialPage: true,
          });
      });
  }

  render() {
    const { loading, redirectToInitialPage, movieToEdit } = this.state;
    if (redirectToInitialPage) {
      return <Redirect to="/" />;
    }

    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movieToEdit} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape.isRequired,
};

export default EditMovie;
