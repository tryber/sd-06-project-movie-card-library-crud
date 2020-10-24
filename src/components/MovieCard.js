import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline } } = this.props;

    return (
      <div data-testid="movie-card">
        Movie Card
        <div>
          <h1>{title}</h1>
          <p>{storyline}</p>
          <h3>{id}</h3>
        </div>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
  }).isRequired,
};
