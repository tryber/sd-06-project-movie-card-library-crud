import React, { Component } from 'react';
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

  componentDidMount() {
    this.fetchMovies();
  }

  renderMovies() {
    const { movies } = this.state;
    return movies.map((movie) => <MovieCard key={movie.title} movie={movie} />);
  }

  render() {
    const { movies } = this.state;
    const loadingElement = <span>Carregando...</span>

    // Render Loading here if the request is still happening
    return (
      <div className="movie-list" data-testid="movie-list">
        {this.state.loading ? loadingElement : this.renderMovies()}
      </div>
    );
  }
}

export default MovieList;
