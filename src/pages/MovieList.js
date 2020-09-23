import React, { Component } from 'react';
import { Loading, MovieCard } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    }
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  async fetchMovie() {
    this.setState(
      {loading:true},
      async () => {
        const array = await movieAPI.getMovies()
        this.setState({
          loading: false,
          movies: array
        })
      }
    )
  }

  renderMovies() {
    return this.state.movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)
  }

  componentDidMount() {
    this.fetchMovie();
  }

  render() {
    const { movies } = this.state;
    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {this.state.loading ? <Loading /> : this.renderMovies() }
      </div>
    );
  }
}

export default MovieList;
