import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import { getMovies } from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.renderizar();
  }

  async renderizar() {
    this.setState(
      { loading: true },
      async () => {
        const movie = await getMovies().then((resultado) => resultado);
        this.setState({
          movies: movie,
          loading: false,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> : movies.map((movie) => {
          return <MovieCard key={movie.title} movie={movie} />;
        })}
      </div>
    );
  }
}

export default MovieList;
