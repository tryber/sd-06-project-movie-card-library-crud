import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.ApiMovies = this.ApiMovies.bind(this);
    this.state = {
      movies: [],
      loading: true,
    };
  }
  componentDidMount() {
    this.ApiMovies();
  }
  async ApiMovies() {
    const cards = await getMovies();
    this.setState({
      movies: cards,
      loading: false,
    });
  }
  render() {
    const { movies, loading } = this.state;
    console.log(movies);
    // Render Loading here if the request is still happening
    return (loading ? <Loading /> : (
      <main>
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </main>
      ));
  }
}

export default MovieList;
