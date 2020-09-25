import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: true,
    }
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies()
  }

  async fetchMovies() {
    const newMovie = await movieAPI.getMovies();
    if(newMovie){
    this.setState({ movies: newMovie, loading: false });
    }
  }


  render() {
    const { movies, loading } = this.state;
    console.log(loading);
    if (loading === true) {
      return (
        <Loading />
      )
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)};
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;

