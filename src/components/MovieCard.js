import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';


class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    console.log(movie);
    return (
      <div className="movie-card" data-testid="movie-card" alt="Movie image">
        <img src={movie.imagePath} alt="" />
        <h1>{movie.title}</h1>
        <h2>{movie.subtitle}</h2>
        <p>{movie.storyline}</p>
        <p>{movie.rating}</p>
        <span>{movie.genre}</span>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object
};

export default MovieCard;
