import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, imagePath, storyline } = movie;
    return (
      <div data-testid="movie-card">
        <img alt="Movie Cover" src={imagePath} />
        <div>
          <h4>{title}</h4>
          <h5>{storyline}</h5>
        </div>
        <div>
          <Link>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
