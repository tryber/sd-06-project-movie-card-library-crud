import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { id, title, subtitle, storyline, rating, imgPath } = this.props;
    return (
      <div className="movie-card" data-testid="movie-card">
        <div>
          <img className="movie-img" src={imgPath} alt={title} />
        </div>
        <div>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>{storyline}</p>
          <p className="movie-rating">{`Rating : ${rating}`}</p>
        </div>
        <div className="more-details-btn">
          <button><Link to={`/movies/${id}`}>More details</Link></button>
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
