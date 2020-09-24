import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';
import movies from '../services/movieData';

class NewMovie extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      redirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const getMovies = await movieAPI.getMovies();
    this.setState({
      movies: getMovies,
    });
  }

  async handleSubmit(newMovie) {
    const addMovie = await movieAPI.createMovie(newMovie);
    this.setState({
      movies: movies.concat(addMovie),
      redirect: true,
    });
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
