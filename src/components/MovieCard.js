import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props
    return (
      <div data-testid="movie-card" className="movie-card">
        <img src={movie.imagePath}/>
        <div className="movie-card-info">
          <h1>{movie.title}</h1>
          <p>{movie.storyline}</p>
          <Link to={`/movies/${movie.id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
