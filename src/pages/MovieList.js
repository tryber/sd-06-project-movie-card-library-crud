import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading'
import * as movieAPI from '../services/movieAPI';


class MovieList extends Component {
  constructor() {
    super();
    this.handleFetch = this.handleFetch.bind(this);
    this.state = {
      movies: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.handleFetch();
  }

  async handleFetch() {
    const result = await movieAPI.getMovies();
    this.setState({
      movies: result,
      loading: false });
  }

  render() {
    const { movies, loading } = this.state;

    return (

      <div data-testid="movie-list">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        {loading ? <Loading /> : movies.map((movie) =>
          <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
