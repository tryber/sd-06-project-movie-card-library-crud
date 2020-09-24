import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
// import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      isLoading: true,
    }
  }

  async fetchMovie() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies: movies,
      isLoading: false,
    });
  }
  // fetchMovie {
  //   movieAPI.getMovie()
  //   .then((data) => this.setState({
  //     movies: data,
  //     isLoading: false,
  //   }));
  // }
  componentDidMount() {
    this.fetchMovie()
  }

  render() {
    const { movies } = this.state;
    // if (isLoading) return (<Loading />);

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
