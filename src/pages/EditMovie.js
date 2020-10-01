import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor() {
    super();
    this.state = {
      shouldRedirect: false,
      movie: [],
      loading: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id).then((result) => this.setState({
      movie: result,
      loading: false,
    }));
  }
  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({
      loading: false,
      shouldRedirect: true,
    });
  }
  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return (<Redirect to="/" />);
    }
    if (loading) {
      return (<Loading />);
    }
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propType = {
  match: PropTypes.shape({
    params: PropTypes.any,
  }).isRequired,
};

export default EditMovie;
