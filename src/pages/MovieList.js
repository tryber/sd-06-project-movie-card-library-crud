import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';
import { Link } from 'react-router-dom';



class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [] ,
      renderLoading: true     
    }
    this.fetchMovies = this.fetchMovies.bind(this);
  }  

  componentDidMount() {
    this.fetchMovies();
  }

  
  
  async fetchMovies() {
    const movies = await movieAPI.getMovies();
    if (movies) {
      
    this.setState({ movies: movies }, () => {this.setState({renderLoading: false})}); 
    }
  }

  render() {
    console.log(this.state.renderLoading)
    const { movies, renderLoading } = this.state;
     if (renderLoading !== false) {
       return <Loading />
     }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
