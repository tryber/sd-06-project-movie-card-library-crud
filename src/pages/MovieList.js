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
      load: true,
    };
  }

  componentDidMount() {
    this.getMoviesList();
  }

  async getMoviesList() {
    this.setState(
      // while loading content
     { loading: true },
      async () => {
        // calls movieAPI to get all movies, create an object and set in state
        const movies = await movieAPI.getMovies();
        this.setState({
          load: false, // after all content is properly loaded in the page
          movies,
        });
      });
  }

  render() {
    const { movies, load } = this.state;

    return (
      <div data-testid="movie-list">
        {load ? <Loading /> : movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
