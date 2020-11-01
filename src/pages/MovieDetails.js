import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
      notFound: false,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI
      .getMovie(id)
      .then((value) => this.setState({
        movie: value,
        loading: false,
      }));
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading, movie } = this.state;
    const {
      title, storyline, imagePath, genre, rating, subtitle, id,
    } = movie;

    if (loading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Título: ${title}`}</p>
        <p>{`Subtítulo: ${subtitle}`}</p>
        <p>{`Sinopse: ${storyline}`}</p>
        <p>{`Gênero: ${genre}`}</p>
        <p>{`Avaliação: ${rating}`}</p>
        <p><Link to={`/movies/${id}/edit`}>EDITAR</Link></p>
        <p><Link to="/">VOLTAR</Link></p>
        <Link
          to="/"
          onClick={() => movieAPI.deleteMovie(id)}
        >
          DELETAR
        </Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.any,
  }).isRequired,
};

export default MovieDetails;
