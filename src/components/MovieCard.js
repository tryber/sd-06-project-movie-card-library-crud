import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline } } = this.props;

    return (
      <div data-testid="movie-card">
        <h2>{title}</h2>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.exact({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
  }).isRequired,
};
export default MovieCard;
