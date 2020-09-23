import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    return (
      <div data-testid="movie-card">
        <h3>{this.props.movie.title}</h3>
        <h4>{this.props.movie.storyline}</h4>
        <Link to={`/movies/${this.props.movie.id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
