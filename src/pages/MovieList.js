import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading'
import { Link } from 'react-router-dom';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    }

    this.searchMoviesList = this.searchMoviesList.bind(this);
  }
  
  async searchMoviesList() {
    const movies = await movieAPI.getMovies();
    this.setState({ movies });
  }
  
  componentDidMount() {
    this.searchMoviesList();
  }
  
  render() {
    const { movies } = this.state;
    // Render Loading here if the request is still happening
    if (movies.length === 0) {
      return (<Loading />)
    }
    
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      <div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
      </div>
    );
  }
}

export default MovieList;
