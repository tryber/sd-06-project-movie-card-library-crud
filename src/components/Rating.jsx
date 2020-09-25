import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <label htmlFor="rating" className="label">Rating:</label>
        <span className="rating">{rating}</span>
      </div>
    );
  }
}

Rating.propTypes = PropTypes.number.isRequired;

export default Rating;
