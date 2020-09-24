import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      Loading: true,
    }
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
  async fetchMovie() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies,
      Loading: false,
    });
  }

  render() {
    const { movies } = this.state;
    if (Loading) return (<Loading />);

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
