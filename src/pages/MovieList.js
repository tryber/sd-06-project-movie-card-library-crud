import React, { Component } from 'react';
import { MovieCard, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    //this.setMovies = this.setMovies.bind.this;

    this.state = {
      movies: [],
      loading: false,
    }
  }

  setMovies() {
    this.setState({ loading: true }, async () => {
      const moviesResp = await movieAPI.getMovies();
      this.setState({ movies: moviesResp, loading: false });
    });
  }

  componentDidMount() {
    this.setMovies()
  }

  render() {
    const { movies, loading } = this.state;
    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        {/* movies.map((movie) => <MovieCard key={movie.title} movie={movie} />) */}
        { loading
          ? <Loading />
          : movies.map((movie) =>
            <MovieCard key={movie.title} movie={movie} />
          )
        }
      </div>
    );
  }
}

export default MovieList;
