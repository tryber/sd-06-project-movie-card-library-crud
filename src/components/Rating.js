import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating, id } = this.props;
    return (
      <div className="movie-card-rating" data-testid="rating">
        <h5 className="movie-card-details">
          <Link
            to={`/movies/${id}`}
            className="movie-card-details-text"
          >
            VER DETALHES
          </Link>
        </h5>
        <h5 className="rating">Rating: {rating}</h5>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default Rating;
