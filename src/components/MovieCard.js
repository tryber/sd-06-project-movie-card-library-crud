import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { imagePath, title, storyline, id } = this.props.movie;

    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt={title} />
        <h3>{title}</h3>
        <h4>{storyline}</h4>
        <div>
          <Link to={`/movies/${id}`} >VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
