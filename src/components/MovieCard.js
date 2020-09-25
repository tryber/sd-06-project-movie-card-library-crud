import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={movie.imagePath} />
        <div className="movie-card-body">
          <h4 data-testid="movie-card-title" className="movie-card-title">{movie.title}</h4>
          <h5 className="movie-card-subtitle">{movie.subtitle}</h5>
          <p className="movie-card-storyline">{movie.storyline}</p>
          <div>
          </div>
          <Link to={`/movies/${movie.id}`}>VER DETALHES</Link>
          <div>
            <h4 className="movie-card-rating">{movie.rating}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
