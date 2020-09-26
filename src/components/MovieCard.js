import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-card">
        <img alt="Imagem do Filme" className="movie-card-image" src={movies.imagePath} />
        <div className="movie-card-boy">
          <h4 className="movie-card-title">{movies.title}</h4>
          <h5 className="movie-card-subtitle">{movies.subtitle}</h5>
          <p className="movie-card-storyline">{movies.storyline}</p>
          <Link to={`movies/${movies.id}`}>Ver Detalhes</Link>
        </div> 
    </div>
    );
  }
}

export default MovieCard;
