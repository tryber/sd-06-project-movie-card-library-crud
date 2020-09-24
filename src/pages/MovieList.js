import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading, MovieCard } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };

    this.handleApi = this.handleApi.bind(this);
  }

  componentDidMount() {
    this.handleApi();
  }

  handleApi() {
    this.setState({ loading: true }, async () => {
      const movie = await movieAPI.getMovies();
      this.setState({
        loading: false,
        movies: movie,
      });
    });
  }

  renderMovies() {
    return this.state.movies.map((movie) => <MovieCard key={movie.title} movie={movie} />);
  }

  render() {
    // const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {/* {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)} */}
        {this.state.loading ? <Loading /> : this.renderMovies()}
        <div className="addMovieCard">
          <button><Link to="/movies/new">ADICIONAR CARTÃO</Link></button> 
        </div>
      </div>
    );
  }
}

export default MovieList;
