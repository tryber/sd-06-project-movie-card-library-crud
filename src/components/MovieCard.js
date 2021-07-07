import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    return (
      <div data-testid="movie-card">
        <h3>{this.props.movie.title}</h3>
        <h4>{this.props.movie.storyline}</h4>
        <span><Link to={`/movies/${this.props.movie.id}`} >VER DETALHES</Link></span>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
