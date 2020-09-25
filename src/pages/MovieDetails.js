import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getMovie, deleteMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.RequisitionDeleteMovie = this.RequisitionDeleteMovie.bind(this);
    this.requisitionAndLoading = this.requisitionAndLoading.bind(this);
    this.state = {
      movie: {},
      loading: false,
      redirectHome: false,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.requisitionAndLoading(id);
  }

  requisitionAndLoading(id) {
    this.setState(
      { loading: true },
      async () => {
        const movie = await getMovie(id);
        this.setState({
          movie,
          loading: false,
        });
      },
    );
  }

  async RequisitionDeleteMovie(id) {
    await deleteMovie(id);
    this.setState({
      redirectHome: true,
    });
  }

  render() {
    const { movie, loading, redirectHome } = this.state;
    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
      id,
    } = movie;
    if (redirectHome) {
      return <Redirect to="/" />;
    }
    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{title}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <button type="button" onClick={() => this.RequisitionDeleteMovie(id)}>DELETAR</button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired }).isRequired,
  }).isRequired,
};

export default MovieDetails;
