import React, { Component } from 'react';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
import MovieList from './MovieList';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fatchMovie = this.fatchMovie.bind(this);
  }

  componentDidMount() {
    this.fatchMovie();
  }

  async fatchMovie() {
    const { id } = this.props.match.params;
    this.setState({
      movie: await movieAPI.getMovie(id),
      status: '',
    });
  }

  
async handleSubmit(updatedMovie) {
    this.setState({
      movie: await movieAPI.updateMovie(updatedMovie),
      shouldRedirect: true,
    })
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect === true) {
      return <MovieList />;
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
