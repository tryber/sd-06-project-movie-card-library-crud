import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <img alt="Folder"src={imagePath} />
        <div>
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
