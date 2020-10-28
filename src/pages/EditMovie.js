import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading, MovieForm } from '../components';


class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'loading',
      shouldRedirect: '',
      movie: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {
    this.fetchMovieToUpdate();
  }


  async fetchMovieToUpdate() {
    const { id } = this.props.match.params;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      status: '',
    });
  }


  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: 'true' });
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
