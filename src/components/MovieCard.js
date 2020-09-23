import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { id, imagePath, storyline, title } = this.props.movie;
    return (
      <div data-testid="movie-card" className="movie-card-container">
        <img className="movie-card-image" src={imagePath} alt={title} />
        <h2>{title}</h2>
        <p>{storyline}</p>
        <Link to={`movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.objectOf(PropType.any).isRequired,
};

export default MovieCard;
