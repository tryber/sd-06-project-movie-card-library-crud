import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.loadApiForEdit();
  }

  async loadApiForEdit() {
    const { id } = this.props.match.params;
    const apiIdMovie = await movieAPI.getMovie(id);
    this.setState({
      movie: apiIdMovie,
      loading: false,
    });
  }

  handleSubmit(updatedMovie) {
    const updateForEdit = movieAPI.updateMovie(updatedMovie);
    this.setState({
      movie: updateForEdit,
      loading: false,
      shouldRedirect: true,
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

EditMovie.propTypes = {
  match: propTypes.objectOf(propTypes.any).isRequired,
};

export default EditMovie;
