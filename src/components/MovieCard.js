import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const {
      movie: {
        id, title, subtitle, storyline, imagePath, rating,
      },
    } = this.props;

    return (
      <div data-testid="movie-card">
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p>{storyline}</p>
          <h3>{id}</h3>
          <p>{rating}</p>
          <img alt="Movie Cover" src={imagePath} />
        </div>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};
