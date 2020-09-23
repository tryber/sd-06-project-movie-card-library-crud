import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor() {
    super();
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.fetchMovie = this.fetchMovie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    this.setState(
      { status: 'loading' },
      async () => {
        const { id } = this.props.match.params;
        const movieData = await movieAPI.getMovie(id);
        this.setState({
          status: false,
          movie: movieData,
          shouldRedirect: false,
        });
      },
    );
  }

  async handleSubmit(updatedMovie) {
    this.setState(
      { shouldRedirect: false },
      async () => {
        movieAPI.updateMovie(updatedMovie);
        this.setState({
          shouldRedirect: true,
        });
      },
    );
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
