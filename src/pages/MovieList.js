import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import { Link } from 'react-router-dom'

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.moviesFetch = this.moviesFetch.bind(this);

    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.moviesFetch();
  }

  async moviesFetch() {
    this.setState(
      { loading: true },
      async () => {
        const response = await movieAPI.getMovies();
        // const responseObj = await response.json();
        this.setState({
          loading: false,
          movies: response,
        });
      },
    );
  }

  render() {
    const { movies } = this.state;
    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {(this.state.loading) ? <Loading /> : movies.map((movie) =>
          <MovieCard key={movie.title} movie={movie} />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
