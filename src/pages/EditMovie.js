import React, { Component } from 'react';

import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovieForEdition();
  }

  async fetchMovieForEdition() {
    this.setState({ status: 'loading'}, async () => {
      const { id } = this.props.match.params;
      const requestReturn = await movieAPI.getMovie(id);
      this.setState({
        status: 'ready',
        movie: requestReturn,
        shouldRedirect: true,
      });
    });
  }

  handleSubmit(updatedMovie) {
    // call API to update movie
    // redirect to main page
    // see shouldRedirect
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    if (status === 'loading') {
      // render Loading
    }
    console.log(this.props.match.params);
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
