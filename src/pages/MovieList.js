import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    }
  }

  componentDidMount() { 
    this.setState( { loading: true },
      async () => {
        this.setState({ movies: await movieAPI.getMovies(), loading: false });
      }
    );
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) {
      return <Loading />
    }
    
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
