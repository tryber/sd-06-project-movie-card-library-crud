import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      status: 'loading',
      shouldRedirect: 'false'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: 'true'
    })
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const id = this.props.match.params.id;
    const filmes = await movieAPI.getMovie(id);
    this.setState({
      movie: filmes,
      status: ''
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect === 'true') {
      return <Redirect to={'/'} />
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
