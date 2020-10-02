import React, { Component } from 'react';
import propTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.fetchMovies = this.fetchMovies.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const { id } = this.props.match.params;

    this.setState({
      loading: true,
    });

    const movie = await movieAPI.getMovie(id);

    this.setState({
      loading: false,
      movie,
    });
  }

  async deleteMovie(idMovie) {
    const deletedMovie = await movieAPI.deleteMovie(idMovie);
    if (deletedMovie.status === "OK") {
      this.setState({
        shouldRedirect: true,
      });
    }
  }

  render() {
    const { loading, movie, shouldRedirect } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { id } = this.props.match.params;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    return loading ? (
      <Loading />
    ) : (
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <Link to="/">VOLTAR</Link>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link
            to="/"
            onClick={() => {
              this.deleteMovie(id);
            }}
          >
            DELETAR
        </Link>
        </div>
      );
  }
}

MovieDetails.propTypes = {
  match: propTypes.shape({ params: propTypes.shape({ id: propTypes.number }) }),
}.isRequired;

export default MovieDetails;
