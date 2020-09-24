import React, { Component } from 'react';

import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      shouldRedirect: false,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchEditedMovies = this.fetchEditedMovies.bind(this);
  }

  handleSubmit(updatedMovie) {
  }
  
  async fetchEditedMovies() {
    const { id } = this.props.match.params;
    const movieEdited = await movieAPI.getMovie(id);
    await this.setState({ })
  }

  componentDidMount() {
    this.fetchEditedMovies();
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
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
