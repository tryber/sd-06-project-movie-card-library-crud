import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline } } = this.props;
    const pathMovieDetails = `/movies/${id}`;
    return (
      <div data-testid="movie-card">
        <h3>{title}</h3>
        <h5>{storyline}</h5>
        <h1>{id}</h1>
        <Link to={pathMovieDetails} >VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyLine: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
