import React from 'react';
import { Link } from 'react-router-dom';

/*
Todos os MovieCards devem possuir em seu conteúdo, pelo menos, 
o título, a sinopse e um link com o texto "VER DETALHES" que 
aponta para a rota movies/:id, onde :id é o id do filme. 
Esta rota exibirá informações detalhadas de um filme.

O que será testado:
cada MovieCard deve exibir pelo menos o título e a sinopse de seu respectivo filme
cada MovieCard deve conter um link com o texto VER DETALHES que redireciona para a 
página de detalhes do filme
*/

class MovieCard extends React.Component {
  render() {  
  const { id, title, subtitle, rating, storyline, imagePath } = this.props.movie;
  
    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt="Movie Cover" />
        <h3>{id}</h3>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{storyline}</p>
        <p>{rating}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
