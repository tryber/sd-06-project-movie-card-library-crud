import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
// import { getMovies } from '../services/movieAPI';
import Loading from '../components/Loading';
// import movies from '../services/movieData';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    }

    this.functionNeeded = this.functionNeeded.bind(this);
  }

  componentDidMount() {
    this.functionNeeded();
  }

  async functionNeeded() {
    // this.setState({ movies: [], loading: true }, async () => {
    const moviesUpLoad = await movieAPI.getMovies();
    this.setState(
      {
        movies: moviesUpLoad,
        loading: false,
      }
    )
    // console.log(this.state);
  }

  render() {
    const { movies, loading } = this.state;
    // console.log("aqui o problema", movies)
    return loading === true ? <Loading /> : (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    )
  }
}

export default MovieList;
