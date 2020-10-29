import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, id } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <h2>{title}</h2>
        <h4>{storyline}</h4>
        <Link to={`/movies/${id}`}>
          VER DETALHES
        </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default MovieCard;
