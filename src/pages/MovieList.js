import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    }
  }

  async componentDidMount() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies,
      isLoading: false,
    })
  }

  render() {
    const { movies, isLoading } = this.state;
   
    // Render Loading here if the request is still happening

    if (isLoading === true) {
      return (<Loading />)
    }
    
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
