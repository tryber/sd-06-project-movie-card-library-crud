import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      movie: [],
      shouldRedirect: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovieUp = this.fetchMovieUp.bind(this);
  }

  componentDidMount() {
    this.fetchMovieUp();
  }

  async fetchMovieUp() {
    const { match } = this.props;
    const result = await movieAPI.getMovie(match.params.id);
    this.setState({ movie: result });
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (movie.length === 0) return <Loading />;

    if (shouldRedirect) {
      return <Redirect to={'/'} />
    }

    if (status === 'loading') {
      // render Loading
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
