import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    }
  }
  componentDidMount() {
    movieAPI.getMovies().then((result) => this.setState({
      movies: result,
      loading: false,
    }))
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) return <Loading />

    return (
      <div data-testid="movie-list">
        {movies.map((moviee) => <MovieCard key={moviee.title} moviee={moviee} />)}
      </div>
    );
  }
}

export default MovieList;
