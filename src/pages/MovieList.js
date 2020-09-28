import React, { Component } from 'react';
import { MovieCard, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    //this.setMovies = this.setMovies.bind.this;

    this.state = {
      movies: [],
    }
  }

  async setMovies() {
    const moviesResp = await movieAPI.getMovies();
    this.setState({ movies: moviesResp });
  }

  componentDidMount() {
    this.setMovies()
  }

  render() {
    const { movies } = this.state;
    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        { movies === []
          ? <Loading />
          : movies.map((movie) => <MovieCard key={movie.title} movie={movie} />
          )
        }
      </div>
    );
  }
}

export default MovieList;
