import React from 'react';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath } = movie;

    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt="Movie Poster" />
        <div>
          <h4>{title}</h4>
          <p>{storyline}</p>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = { movie: propTypes.arrayOf(propTypes.object).isRequired };

export default MovieCard;
