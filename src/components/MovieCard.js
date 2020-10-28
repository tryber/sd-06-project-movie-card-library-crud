import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline } } = this.props;
    return (
      <div data-testid="movie-card">
        <h4>{title}</h4>
        <h5>{storyline}</h5>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = { movie: propTypes.arrayOf(propTypes.object).isRequired };
export default MovieCard;
