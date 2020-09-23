import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

const getMovies = movieAPI.getMovies;

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      render: <Loading />
    }
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }
  
  async fetchMovies() {
    const movies = await getMovies();
    this.setState({ movies }); 
  }

  render() {
    const { movies, render } = this.state;
    if (!movies  ) {
      
      return <Loading />
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
