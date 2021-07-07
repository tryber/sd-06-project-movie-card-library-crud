import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MovieCard from '../components/MovieCard';
import { getMovies } from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor() {
    super();
    this.renderizar = this.renderizar.bind(this);
    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.renderizar();
  }

  async renderizar() {
    this.setState(
      { loading: true },
      async () => {
        const movie = await getMovies();
        this.setState({
          movies: movie,
          loading: false,
        });
      },
    );
  }

  render() {
    // Render Loading here if the request is still happening
    const { movies, loading } = this.state;
    if (loading) {
      return <Loading />;
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
