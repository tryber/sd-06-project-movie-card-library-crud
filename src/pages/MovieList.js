import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components/index';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: undefined,
    }
  }

  componentDidMount() {
    const moviesList = movieAPI.getMovies();
    moviesList.then(r => this.setState({ movies: r}));
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {movies ?
          movies.map((movie) => (
            <MovieCard
              key={movie.title}
              movie={movie}
            />)
          ) : <Loading />
        }
      </div>
    );
  }
}

export default MovieList;
