import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import { getMovie, updateMovie } from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: false,
      redirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFetchMovieApi = this.handleFetchMovieApi.bind(this);
  }

  componentDidMount() {
    this.handleFetchMovieApi();
  }

  async handleSubmit(updatedMovie) {
    await updateMovie(updatedMovie);
    this.setState({
      redirect: true,
      loading: false,
    });
  }

  async handleFetchMovieApi() {
    const result = await getMovie(this.props.match.params.id);
    this.setState({
      movie: result,
      loading: true,
    });
  }

  render() {
    const { loading, redirect, movie } = this.state;
    if (redirect === true) {
      return <Redirect to="/" />;
    }

    if (loading === false) {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />;
      </div>
    );
  }
}

export default EditMovie;

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};