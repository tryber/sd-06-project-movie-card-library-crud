import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchMovies = this.fetchMovies.bind(this);  
    this.state = {
      movies: [],
      loading: true, // 
    }
  }
  async fetchMovies() {
    const requestObj = await movieAPI.getMovies(); // retorna o filme - faz o fetch
        this.setState({ 
          movies: requestObj,  //coloca dentro de movies o filme retornado
          loading: false, //
        });
  }
  componentDidMount(){
    this.fetchMovies();
  }
 

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    if(this.state.loading) return <Loading />;
   // se fetchMovies estiver em curso chamar <loading />

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
