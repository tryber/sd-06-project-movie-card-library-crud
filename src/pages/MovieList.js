import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading, MovieCard } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: undefined,
      loading: true,
    }
  }
/*
componentDidMount(){
  movieAPI.getMovies()
    .then((r) => this.setState({ movies: r, loading: false }))
}
*/
  async componentDidMount() {
    const apiResult = await movieAPI.getMovies();
    const turnFalse = false;
    this.setNewState(apiResult, turnFalse);
    console.log(apiResult)
  }

  setNewState(apiResult, turnFalse) {
    this.setState({
      movies: apiResult,
      loading: turnFalse,
    });
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) return <Loading />
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <div><Link to="/movies/new">ADICIONAR CARTÃO</Link></div>
      </div>
    );
  }
}

export default MovieList;
