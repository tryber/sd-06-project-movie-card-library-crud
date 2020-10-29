import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.getMyMoviesList = this.getMyMoviesList.bind(this);

    this.state = {
      moviesList: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.getMyMoviesList();
  }

  async getMyMoviesList() {
    this.setState(
      { loading: true },
      async () => {
        const moviesList = await movieAPI.getMovies();
        this.setState({
          loading: false,
          moviesList,
        });
      },
    );
  }

  render() {
    const { moviesList, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {loading ? <Loading />
          :
          moviesList.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
