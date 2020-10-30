// referencia Sidinei

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, imagePath, id } = this.props.movie;
    return (
      <div data-testid="movie-card">
        Movie Card
        <h4 className="movie-card-title">{title}</h4>
        <img className="movie-card-image" src={imagePath} alt="Movie Cover" />
        <p className="movie-storyline">{storyline}</p>
        <div className="movie-card-body" />
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string,
  }),
};

export default MovieCard;
