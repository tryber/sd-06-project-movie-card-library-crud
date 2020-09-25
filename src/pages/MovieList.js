import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components/index';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    const moviesList = movieAPI.getMovies();
    moviesList.then((r) => this.setState({ movies: r }));
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    const movieList = movies.map((movie) => (
      <MovieCard
        key={movie.title}
        movie={movie}
      />
    ));
    return (
      <div data-testid="movie-list">
        {movies.length > 0 ? 
          <div>
            {movieList} 
            <button><Link to="/movies/new">ADICIONAR CARTÃO</Link></button>
          </div>
          : <Loading />
        }
      </div>
    );
  }
}

export default MovieList;
