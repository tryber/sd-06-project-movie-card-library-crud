import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.updateState = this.updateState.bind(this);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.updateState();
  }

  updateState() {
    this.setState(
      { loading: true },
      async () => {
        const myMovies = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: myMovies,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;
    const map = movies.map((movie) => <MovieCard key={movie.title} movie={movie} />);
    return (
      <div data-testid="movie-list">
        <p>MovieList</p>
        {loading ? <Loading /> : map}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
