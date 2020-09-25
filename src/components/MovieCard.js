import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './componentCss/MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, id, imagePath, subtitle } } = this.props;
    return (
      <div className="container">
        <img className="imgCard" src={imagePath} alt="imagem card" />
        <div data-testid="movie-card">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p>{storyline}</p>
          <Link className="details-link" to={`movies/${id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
