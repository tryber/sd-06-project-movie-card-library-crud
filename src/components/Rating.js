import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating, id } = this.props;
    return (
      <div className="footer-links" data-testid="rating">
        <Link className="footer-button footer-link" to={`/movies/${id}`}>VER DETALHES</Link>
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
