import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, id, imagePath, subtitle } } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt="imagem do filme" />
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <h3>{storyline}</h3>
        <Link to={`movie/${id}`}>Ver Detalhes</Link>
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
}
