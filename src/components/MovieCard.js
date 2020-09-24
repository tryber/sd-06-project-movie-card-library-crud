import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const {
      title, subtitle, imagePath, genre, storyline, id,
    } = movie;
    return (
      <div data-testid="movie-card">
        <div><img src={imagePath} alt="game" /></div>
        <div>{title}</div>
        <div>{subtitle}</div>
        <div>{genre}</div>
        <div>{storyline}</div>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
