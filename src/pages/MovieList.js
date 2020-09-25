import React, { Component } from 'react';
import { Loading, MovieCard } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: undefined,
      loading: true
    }
  }
/*
componentDidMount(){
  movieAPI.getMovies()
    .then((r) => this.setState({ movies: r, loading: false }))
}
*/
async componentDidMount(){
  const apiResult = await movieAPI.getMovies();
  this.setState({ 
    movies: apiResult,
    loading: false
  })
}

  render() {
    const { movies, loading } = this.state;
    
    if (loading) return <Loading />;     
    
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
      );
    }   
  }

export default MovieList;



