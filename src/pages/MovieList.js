import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import '../App.css';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
      show: '',
    }

    this.renderMovies = this.renderMovies.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState(
      { loading: true },
      async () => {
        const moviesJson = await movieAPI.getMovies();

        this.setState({
          loading: false,
          movies: moviesJson,
          show: 'invisible',
        });
      },
    );
  }

  renderMovies() {
    // let z = 0;
    const { movies } = this.state;
    const myMovies = movies.map((movie) => {
      return <MovieCard key={movie.title} movie={movie} /*zStyle={z += 1}*/ />
    })
    return <>
      { myMovies}
      <div className="add-card"><Link to="/movies/new"><p>ADICIONAR CARTÃO</p></Link></div>
    </>
  }

  render() {
    const { movies } = this.state;
    const loadingElement = <p></p>;

    return (
      <div className="movie-list" id={this.state.show} data-testid="movie-list">
        {this.state.loading ? loadingElement : this.renderMovies()}
      </div>
    );
  }
}

export default MovieList;
