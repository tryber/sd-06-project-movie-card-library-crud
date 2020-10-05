import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { id, imagePath, title, subtitle, storyline } = this.props.movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img src={imagePath} alt={title} className="movie-card-image" />
        <div className="movie-card-body">
          <h1 className="movie-card-title">{title}</h1>
          <p className="movie-card-subtitle">{subtitle}</p>
          <p className="movie-card-storyline">{storyline}</p>
          <Link to={`/movies/${id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
