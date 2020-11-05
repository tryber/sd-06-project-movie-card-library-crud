import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      <div data-testid="movie-list">
        <div className="add-card-button-container">
          <Link to="/movies/new" className="add-card-button">ADICIONAR CARTÃO</Link>
        </div>
        <div className="movie-list-container">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
