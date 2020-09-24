import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { title, imagePath, storyline, id } = this.props.movie

    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt=''></img>
        <h4>{title}</h4>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
