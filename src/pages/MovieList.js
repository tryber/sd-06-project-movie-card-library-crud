import React, { Component } from 'react';
import MovieCard from '../components/MovieCard.js';
import Loading from '../components/Loading.js';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  async componentDidMount() {
    movieAPI.getMovies().then((result) => {
      this.setState({
        movies: result,
        loading: false,
      });
    });
  } 

  render() {
    const { movies, loading } = this.state;    
    return (
      <div className="movie-list" data-testid="movie-list">
        {loading ? <Loading /> 
          : movies.map((movie) => <MovieCard key={movie.title} movies={movie} />)}
      </div>
    );
  }
}

export default MovieList;
