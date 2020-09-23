import React, { Component } from 'react';
import { MovieCard, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true
    }
  }

  async componentDidMount() {
    const movies = await movieAPI.getMovies();
    this.setState({ 
      isLoading: false,
      movies
    });
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {
          this.state.isLoading
            ? <Loading />
            : movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)
        }
      </div>
    );
  }
}

export default MovieList;
