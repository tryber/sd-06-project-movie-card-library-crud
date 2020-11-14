import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { id, title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img alt="Movie's Cover" src={imagePath} />
        <div>
          <h4 data-testeid="movie-card-title">{title}</h4>
          <h5 data-testeid="movie-card-subtitle">{subtitle}</h5>
          <p>{storyline}</p>
          <p data-testid="rating">{rating}</p>
          <Link to={`/movies/${id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.shape.isRequired };

export default MovieCard;
