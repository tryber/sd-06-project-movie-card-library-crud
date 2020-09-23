import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    console.log(movie)
    return (
      <div data-testid="movie-card">
        <img src={movie.imagePath} alt={movie.title} />
        <h1>{movie.title}</h1>
        <h2>{movie.subtitle}</h2>
        <p>{movie.storyline}</p>
        <Link to={`/movies/${movie.id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
