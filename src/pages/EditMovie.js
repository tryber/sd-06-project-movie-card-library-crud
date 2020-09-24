import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Loading } from '../components';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      shouldRedirect: {},
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const { getMovie } = movieAPI;
    const { id } = this.props.match.params;
    const movie = await getMovie(id);
    this.newState(movie);
  }

  newState(newState) {
    this.setState({
      status: true,
      shouldRedirect: newState,
      movie: newState,
    });
  }

  handleSubmit(updatedMovie) {
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    if (status === false) {
      // render Loading
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
  match: propTypes.shape({
    isExact: propTypes.bool,
    params: propTypes.shape({
      id: propTypes.string,
      path: propTypes.string,
      url: propTypes.string,
    }),
    path: propTypes.string,
    url: propTypes.string,
  }).isRequired,
};

export default EditMovie;
