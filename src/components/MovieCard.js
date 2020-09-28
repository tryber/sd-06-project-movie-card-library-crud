import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id } = movie;
    return (
      <div data-testid="movie-card">
        <h2>{title}</h2>
        <h5>{storyline}</h5>
        <Link to={`movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propType = {
    movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
