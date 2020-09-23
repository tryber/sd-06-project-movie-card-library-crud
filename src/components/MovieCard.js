import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, rating, imagePath } = this.props.movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <div className="movie-card-header">
          <img src={imagePath} alt={title} />
        </div>
        <div className="movie-card-description">
          <p>{title}</p>
          <p>{storyline}</p>
          <div>{rating}</div>
        </div>
        <div className="movie-card-footer">
          <Link to="/movies/:id">VER DETALHES</Link>
        </div>
        
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default MovieCard;
