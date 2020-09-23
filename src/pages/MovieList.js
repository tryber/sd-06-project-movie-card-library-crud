import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading, MovieCard } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    this.setState(
      { loading: true },
      async () => {
        const moviesData = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: moviesData,
        });
      },
    );
  }

  renderMovies() {
    return this.state.movies.map((movie) => <MovieCard key={movie.title} movie={movie} />);
  }

  render() {
    return (
      <div data-testid="movie-list" className="movie-list">
        {this.state.loading ? <Loading /> : this.renderMovies() }
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
