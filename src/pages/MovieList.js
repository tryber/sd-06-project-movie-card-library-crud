import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading'
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    }
    this.fetchList = this.fetchList.bind(this);
  }

  componentDidMount() {
    this.fetchList()
  }

  //  Criar uma função para a requisição obtida atraves do movieAPI

  async fetchList() {
    const listOfMovies = await movieAPI.getMovies();
    this.setState({
      movies: listOfMovies,
      loading: false,
    })
  }

  render() {
    const { movies, loading } = this.state;
    if (loading === true) {
      return ( 
      <div data-testid="movie-list">
        <Loading />
      </div>
      )
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
