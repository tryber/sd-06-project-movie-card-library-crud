import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      movies: [],
      loading: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    movieAPI.getMovies().then((result) => this.setState({
      movies: result,
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

export default EditMovie;
