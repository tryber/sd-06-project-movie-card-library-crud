import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import '../App.css';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    }

    this.renderMovies = this.renderMovies.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState(
      { loading: true },
      async () => {
        const moviesJson = await movieAPI.getMovies();

        this.setState({
          loading: false,
          movies: moviesJson,
        });
      },
    );
  }

  renderMovies() {
    const { movies } = this.state;
    return movies.map((movie) => <MovieCard key={movie.title} movie={movie} />);
  }

  render() {
    const { movies } = this.state;
    const loadingElement = <span>Carregando...</span>

    return (
      <div className="movie-list" data-testid="movie-list">
        {this.state.loading ? loadingElement : this.renderMovies()}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
