import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <h1>{movie.title}</h1>
        <img src={movie.imagePath} alt={movie.title} />
        <p>{movie.storyline}</p>
        <Link to="/movies/">Detalhes</Link>
      </div>
    );
  }
}

export default MovieCard;
