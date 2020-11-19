import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading'
import * as movieAPI from '../services/movieAPI';
import Header from '../components/Header';


class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    }
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const arrayMovies = await movieAPI.getMovies();
    this.setState({
      movies: arrayMovies,
      loading: false,
    })
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div>
        <div>
          <Header />
        </div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        <div data-testid="movie-list" className="movie-list">
          {loading ? <Loading /> :
          movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
