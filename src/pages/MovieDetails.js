import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Loading } from '../components';
import { getMovie } from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      imagePath: '',
      title: '',
      subtitle: '',
      storyline: '',
      genre: '',
      rating: '',
    };
  }

  componentDidMount() {
    this.handleFetchMovieApi();
  }

  async handleFetchMovieApi() {
    const { id } = this.props.match.params;
    const movieApi = await getMovie(id);
    this.setState({
      loading: true,
      title: movieApi.title,
      imagePath: movieApi.imagePath,
      subtitle: movieApi.subtitle,
      storyline: movieApi.storyline,
      genre: movieApi.genre,
      rating: movieApi.rating,
    });
  }

  render() {
    const { id } = this.props.match.params;
    const { title, storyline, imagePath, genre, rating, subtitle, loading } = this.state;
    if (loading === false) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
