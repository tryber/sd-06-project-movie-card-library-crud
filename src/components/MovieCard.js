import React from 'react';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    console.log(movie);
    return (
      <div class="movie-card" data-testid="movie-card">
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

export default MovieCard;
