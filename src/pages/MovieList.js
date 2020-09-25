import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading'
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.handleFetch = this.handleFetch.bind(this);
    this.state = {
      movies: [],
      loading: true
    }
  }

  async handleFetch () {
    const result = await movieAPI.getMovies();
    this.setState({ 
      movies: result,
      loading: false });
  }

  componentDidMount() {
    this.handleFetch();
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening
    // if (movies === []) return Loading;
    return (

      <div data-testid="movie-list">
        {loading ? <Loading /> : movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
