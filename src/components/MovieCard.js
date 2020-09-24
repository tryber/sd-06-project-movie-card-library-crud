import React from 'react';
import { Link } from 'react-router-dom'
// import MovieDetails from '../pages/MovieDetails';
class MovieCard extends React.Component {

  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <span key={movie.title} />
        <h4>{movie.title}</h4>
        <p>{movie.storyline}</p>
        <Link to={`/movies/${movie.id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;


// 3 - MovieCard: deve possuir um link para a página de detalhes de um filme
// ✕ deve exibir pelo menos o título e a sinopse de seu respectivo filme (65ms)
// ✕ deve conter um link com o texto "VER DETALHES" que redireciona para a página de detalhes do filme (12ms)