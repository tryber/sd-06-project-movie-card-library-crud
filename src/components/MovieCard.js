import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';


class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    console.log(movie);
    return (
      <div className="movie-card" data-testid="movie-card" alt="Movie image">
        <img src={movie.imagePath} />
        <h1>{movie.title}</h1>
        <h2>{movie.subtitle}</h2>
        <p>{movie.storyline}</p>
        <p>{movie.rating}</p>
        <span>{movie.genre}</span>
      </div>
    );
  }
}

MovieCards.PropTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default MovieCard;
