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

  async fetchMovies() {
    this.setState(
      { loading: true },
      async () => {
        const movieList = await movieAPI.getMovies();
    
        this.setState({
          movies: movieList,
          loading: false,
        });
      }
    );
  }

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const { movies } = this.state;

    if(this.state.loading === true) {
      return (<Loading />);
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
