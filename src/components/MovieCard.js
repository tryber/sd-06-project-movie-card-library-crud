import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img alt="Movie's Cover" src={imagePath} />
        <div>
          <h4 data-testeid="movie-card-title">{title}</h4>
          <h5 data-testeid="movie-card-subtitle">{subtitle}</h5>
          <p>{storyline}</p>
          <p>{rating}</p>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.shape.isRequired };

export default MovieCard;
