import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { id, title, storyline, imagePath } = this.props.movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img className="movie-image" src={imagePath} alt="" />
        <p>{title}</p>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    // subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    // rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    // bookmarked: PropTypes.bool,
    // genre: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
