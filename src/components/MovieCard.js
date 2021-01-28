import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <h4>{movie.title}</h4>
        <img src={movie.imagePath} alt={movie.title} />
        <p>{movie.storyline}</p>
        <Link to={`/movies/${movie.id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.shape({}).isRequired };

export default MovieCard;
