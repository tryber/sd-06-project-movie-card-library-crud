import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      status: 'loading',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.movieId = this.movieId.bind(this);
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);

    this.setState({
      shouldRedirect: true,
    });
  }

  async movieId() {
    const id = await movieAPI.getMovie(this.props.match.params.id);
    this.setState({
      movie: id,
      status: 'loaded',
    })
  }

  componentDidMount() {
    this.movieId();
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect === true) {
      return <Redirect to="/" />
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
