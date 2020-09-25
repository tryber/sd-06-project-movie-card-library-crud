import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { id, title, subtitle, storyline, rating, imgPath } = this.props;
    return (
      <div data-testid="movie-card">
        <div>
          <img src={imgPath} alt={title} />
        </div>
        <div>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>{storyline}</p>
          <span>{rating}</span>
        </div>
        <div>
          <button><Link to={`/movies/${id}`}>VER DETALHES</Link></button>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCard;
