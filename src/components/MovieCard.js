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
  id: propTypes.number.isRequired,
  genre: propTypes.string.isRequired,
  imagePath: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
  storyline: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

export default MovieCard;
