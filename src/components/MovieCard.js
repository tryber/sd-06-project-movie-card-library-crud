import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {

  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath, id, genre } } = this.props;
    return (
      <div data-testid="movie-card">
        <h2>{title}</h2>
        <img src={imagePath} alt={title} />
        <h3>{subtitle}</h3>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`} >VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
