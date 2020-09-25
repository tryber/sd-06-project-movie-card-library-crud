import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';


class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    }
  }

  async componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const filmes = await movieAPI.getMovies();
    this.setState({
      movies: filmes,
      loading: false,
    })
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="container">
        <div className="movie-list" data-testid="movie-list">
          {movies.length === 0 ? <Loading /> : movies.map((movie) =>
            <MovieCard key={movie.title} movie={movie} />,
          )
          }
        </div>
        <div className="add-movie-div">
          <Link className="add-movie link" to={'/movies/new'}>ADICIONAR CARTÃO</Link>
        </div>
      </div>
    );
  }
}

export default MovieList;
