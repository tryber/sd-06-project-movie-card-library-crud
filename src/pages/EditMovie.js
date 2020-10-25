import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import MovieList from './MovieList';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderMovie = this.renderMovie.bind(this);
  }

  componentDidMount() {
    this.renderMovie();
  }

  async handleSubmit(updatedMovie) {
    this.setState({
      movie: { ...updatedMovie },
    });
    await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async renderMovie() {
    const { id } = this.props.match.params;
    const resultAPI = await movieAPI.getMovie(id);
    this.setState({
      movie: { ...resultAPI },
      status: '',
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect === true) {
      return <Redirect to={MovieList} />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <h1>Edit Movie</h1>
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
