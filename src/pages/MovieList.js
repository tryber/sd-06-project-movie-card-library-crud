import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    }
  }
  componentDidMount() {
    movieAPI.getMovies().then((answer) => {
      this.setState({
        movies: answer,
        loading: false,
      })
    })
  }

  render() {
    const { movies, loading } = this.state;

    if (loading === true) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-list">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
