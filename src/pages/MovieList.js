import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';


import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.changeStage = this.changeStage.bind(this);

    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  async componentDidMount() {
    const movies = await movieAPI.getMovies();
    this.changeStage(movies)
  }

  changeStage(data) {
    this.setState({
      movies: data,
      isLoading: false,
    });
  }

  render() {
    const { movies, isLoading } = this.state;

    // Render Loading here if the request is still happening

    if (isLoading === true) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-list">
        <button type="button"><Link to="/movies/new">ADICIONAR CARTÃO</Link></button>
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MovieList;
