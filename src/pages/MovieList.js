import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading'
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    }
  }
  
  async componentDidMount () {
    const getApi = await movieAPI.getMovies();
    console.log(getApi);
    this.setState({
      movies: getApi
    })
  }
  

  render() {
    const { movies } = this.state;
    

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
