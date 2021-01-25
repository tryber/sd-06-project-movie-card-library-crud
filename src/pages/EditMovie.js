import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import '../css/Loading.css';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      movie: {},
      loading: true,
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    this.setState({
      movie: await movieAPI.getMovie(this.state.id),
      loading: false,
    });
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);

    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { shouldRedirect, loading, movie } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (loading) {
      return <Loading />;
    }

    return (
      <div className="edit-movie-centered" data-testid="edit-movie">
        {loading ? <Loading className="loading-img" /> :
        <MovieForm
          className="movie-form"
          movie={movie}
          onSubmit={this.handleSubmit}
        />
        }
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;

export default EditMovie;
