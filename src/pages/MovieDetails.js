import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      isLoading: true,
      shouldRedirect: false,
    };

    this.fetchMovie = this.fetchMovie.bind(this);
    this.fetchDeleteMovie = this.fetchDeleteMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const id = this.props.match.params.id;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      isLoading: false,
    });
  }

  async fetchDeleteMovie() {
    const id = this.props.match.params.id;
    const movie = await movieAPI.deleteMovie(id);
    this.setState({
      movie,
      shouldRedirect: true,
    });
  }

  render() {
    const { isLoading, movie, shouldRedirect } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    if (isLoading) {
      return <Loading />;
    }

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="movie-details">
        <div>
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <h1>{`Title: ${title}`}</h1>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
        </div>
        <button type="button"><Link to={`/movies/${id}/edit`}>EDITAR</Link></button>
        <button type="button"><Link to="/">VOLTAR</Link></button>
        <button type="button" onClick={this.fetchDeleteMovie}><Link to="/">DELETAR</Link></button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({ id: propTypes.string.isRequired }).isRequired,
  }).isRequired,
};

export default MovieDetails;
