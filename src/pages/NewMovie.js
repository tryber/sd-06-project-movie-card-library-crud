import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';
// import Loading from '../components/Loading';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const createApi = await movieAPI.createMovie();
    this.setState({
      movies: createApi,
      // isLoading: true,
    });
  }

  handleSubmit(newMovie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  }

  render() {
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
        <Link to={`/newMovies`} className='links'>ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default NewMovie;
