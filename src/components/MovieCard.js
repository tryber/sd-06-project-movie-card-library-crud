import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  constructor() {
    super();

  }

  render() {
    const { id, title, imagePath, storyline } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <img src={imagePath} />
        <h3>{title}</h3>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
