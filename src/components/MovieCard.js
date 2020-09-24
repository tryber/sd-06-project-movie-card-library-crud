import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../App.css';


class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const movieLink = "/movies/:" + movie.id;
    return (
      <div className="movie-card" data-testid="movie-card" alt="Movie image">
        <img src={movie.imagePath} alt="" />
        <h1>{movie.title}</h1>
        <p>{movie.storyline}</p>
        <Link to={movieLink}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieCard;
