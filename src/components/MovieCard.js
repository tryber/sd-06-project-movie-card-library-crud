import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { imagePath, title, storyline, id } = this.props.movie
    return (
      <div data-testid="movie-card">
        <img alt="Movie Cover" src={imagePath} />
        <p>{title}</p>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default MovieCard;
