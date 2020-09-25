import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import './MovieList.css';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      status: 'loading',
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((response) => this.setState(() => {
      const newMovies = response;
      return ({ movies: newMovies, status: '' });
    }));
  }

  render() {
    const { movies } = this.state;
    if (this.state.status === 'loading') return <Loading />;
    return (
      <div className="movie-list-container" data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
