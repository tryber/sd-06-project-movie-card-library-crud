import React from 'react';
import { Link } from 'react-router-dom'

class MovieCard extends React.Component {
  render() {
    const { title, storyline, imagePath, id } = this.props.movie;
    
    return (
      <div data-testid="movie-card">
        <div>
          <img src={imagePath} alt={title} />
        </div>
        <div>
          <h4>{title}</h4>
        </div>
        <div>
          <p>{storyline}</p>
        </div>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
