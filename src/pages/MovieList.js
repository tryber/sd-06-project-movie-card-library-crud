import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading'

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
        // calls movieAPI to get all movies, create and object and set in page's state 
        const movies = await movieAPI.getMovies();
        this.setState({
          load: false, // after all content is properly loaded in the page
          movies,
        });
      }
    );
  }

  render() {
    const { movies, load } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {load ? <Loading /> : movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
