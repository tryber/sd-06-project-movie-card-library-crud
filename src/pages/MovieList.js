import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.getMyMovies = this.getMyMovies.bind(this);

    this.state = {
      movies: [],
      load: true,
    };
  }

  componentDidMount() {
    this.getMyMovies();
  }

  async getMyMovies() {
    this.setState(
      { load: true },  // primeiro parametro
      async () => {       // segundo parametro
        const myMovies = await movieAPI.getMovies();
        this.setState({
          load: false,
          movies: myMovies,
        });
      });
  }

  render() {
    const { movies, load } = this.state;
    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        <p>Movie List</p>
        {load ? <Loading /> : movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
