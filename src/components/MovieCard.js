import React from 'react';
import './MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card" className="movie-card">
        <div className="movie-card-header">
          <img src={movie.imagePath} alt={movie.title} />
        </div>
        <div className="movie-card-description">
          <p>{movie.title}</p>
          <p>{movie.storyline}</p>
          <div>{movie.rating}</div>
        </div>
        
      </div>
    );
  }
}

export default MovieCard;
