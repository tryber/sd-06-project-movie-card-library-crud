import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
import './pagesCSS/MovieDetails.css';

class MovieDetails extends Component {

  constructor() {
    super();

    this.changeSetState = this.changeSetState.bind(this);
    this.delMovie = this.delMovie.bind(this);

    this.state = {
      movieDetailsSelected: '',
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await movieAPI.getMovie(id);
    this.changeSetState(res);
  }

  changeSetState(componentResponse) {
    this.setState({ movieDetailsSelected: componentResponse });
  }

  async delMovie() {
    const { id } = this.props.match.params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    if (this.state.movieDetailsSelected === '') return <Loading />;

    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
      id,
    } = this.state.movieDetailsSelected;
    return (
      <div className="container-movie-list" data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} width="600px" />
        <div className="info">
          <p><strong>Título:</strong>{` ${title}`}</p>
          <p><strong>Subtitle:</strong>{` ${subtitle}`}</p>
          <p><strong>Storyline:</strong>{` ${storyline}`}</p>
          <p><strong>Genre:</strong>{` ${genre}`}</p>
          <p><strong>Rating:</strong>{` ${rating}`}</p>
        </div>
        <div className="container-buttons">
          <Link className="buttons" to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link className="buttons" to="/">VOLTAR</Link>
          <Link className="buttons" to="/" onClick={this.delMovie}>DELETAR</Link>
        </div>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
};
