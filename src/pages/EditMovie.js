import React, { Component } from 'react';
import { Redirect, BrowserRouter } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      movie: {},
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then((response) => this.setState(() => {
      const movie = response;
      return ({ movie, status: false, shouldRedirect: true });
    }));
  }

  componentDidMount() {
    const movieId = this.props.match.params.id;
    movieAPI.getMovie(movieId).then((response) => this.setState(() => {
      const movie = response;
      return ({ movie, status: '' });
    }));
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return (<Redirect to="/" />);
    }

    if (status === 'loading') {
        return <Loading />
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
