import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();
    this.fetchMovie = this.fetchMovie.bind(this);
    this.deleteMovies = this.deleteMovies.bind(this);
    this.state = {
      movie: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match } = this.props;
    const response = await movieAPI.getMovie(match.params.id);
    this.setState({ movie: response, loading: false });
  }

  async deleteMovies() {
    const { match } = this.props;
    await movieAPI.deleteMovie(match.params.id);
  }

  render() {
    const { movie, loading } = this.state;

    if (loading === true) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    const movieDetails = (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${movie.id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={this.deleteMovies}>DELETAR</Link>
      </div>
    );

    if (movie.length === 0) {
      return <Loading />;
    } return movieDetails;
  }
}

export default MovieDetails;
