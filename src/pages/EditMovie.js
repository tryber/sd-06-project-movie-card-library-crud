import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Loading } from '../components';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovieById = this.getMovieById.bind(this);
  }

  componentDidMount() {
    this.getMovieById();
  }
  
  async getMovieById() {
    const { match } = this.props;
    const movie = await movieAPI.getMovie(match.params.id);
    const loading = 'done';
    this.setState({ movie, status: loading });
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect - irá navegar para um novo local. O novo local substituirá o local atual.
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      // render Loading
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
