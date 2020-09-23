import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, id } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <h3>{title}</h3>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      storyline: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
};

MovieCard.defaultProps = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      title: 'V for Vendetta',
      storyline: 'Remember, remember..',
      id: 3,
    }),
  ),
};

export default MovieCard;
