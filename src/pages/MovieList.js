import React, { Component } from 'react';
import { Loading } from '../components';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    this.fetchMovie()
  }

  async fetchMovie() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies,
      isLoading: false,
    });
  }

  render() {
    const { movies, isLoading } = this.state;

    // Render Loading here if the request is still happening
    if (isLoading === true) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-list">

        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
