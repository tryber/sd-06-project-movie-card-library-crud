import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types'

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={movie.imagePath} alt={movie.title} />
        <div>
          <h1>{movie.title}</h1>
          <h2>{movie.subtitle}</h2>
          <p>{movie.storyline}</p>
        </div>
        <div>
          <Link to={`/movies/${movie.id}`}>
            VER DETALHES
          </Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.shape({
    imagePath: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    storyline: propTypes.string.isRequired,
    storyline: propTypes.string.isRequired,
  }).isRequired
};

export default MovieCard;
