import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <div>
          <img src={movie.imagePath} alt={`imagem do filme ${movie.title}`} />
          <h2>{movie.title}</h2>
          <h3>{movie.subtitle}</h3>
          <p>{movie.storyline}</p>
        </div>
        <Link to={`/movies/${movie.id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.arrayOf(propTypes.object).isRequired,
};

export default MovieCard;
