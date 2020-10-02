import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { id, title, imagePath, storyline } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt="Movie Cover" />
        <h3>{title}</h3>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  id: propTypes.number,
  title: propTypes.string,
  imagePath: propTypes.string,
  storyline: propTypes.string,
}.isRequired;

export default MovieCard;
