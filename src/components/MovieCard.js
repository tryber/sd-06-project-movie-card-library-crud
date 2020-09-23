import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img className="movie-card-image" src={movie.imagePath} alt={movie.title} />
        <div className="movie-card-body">
          <h1 className="movie-card-title">{movie.title}</h1>
          <h2 className="movie-card-subtitle">{movie.subtitle}</h2>
          <p className="movie-card-storyline">{movie.storyline}</p>
          <div className="movie-card-rating" data-testid="rating">
            <span className="rating">{movie.rating}</span>
          </div>
          <Link to={`/movies/${movie.id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired,
    storyline: propTypes.string.isRequired,
    imagePath: propTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
