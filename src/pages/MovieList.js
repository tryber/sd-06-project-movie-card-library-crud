import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';


class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const getApi = await movieAPI.getMovies();
    this.setState({
      movies: getApi,
      isLoading: false,
    });
  }

  render() {
    const { movies, isLoading } = this.state;
    return isLoading ? <Loading /> :
    (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}
MovieList.propTypes = { movies: PropTypes.arrayOf.isRequired };
export default MovieList;
