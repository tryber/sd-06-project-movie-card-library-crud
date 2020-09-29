import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline, imagePath, rating, subtitle, genre } } = this.props;

    return (
      <div data-testid="movie-card">
        <div>
          <h4>{title}</h4>
          <img src={imagePath} alt={title} />
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
          <p>Rating: {rating}</p>
          <p>Gênero: {genre}</p>
        </div>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}


export default MovieCard;
