import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, id } = this.props.movie;
    return (
      // deve exibir pelo menos o título e a sinopse de seu respectivo filme
      // deve conter um link com o texto VER DETALHES que redireciona para a página de detalhes do filme
      <div data-testid="movie-card">
        <h2>{title}</h2>
        <h5>{storyline}</h5>
        <Link to={`movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propType = {
  title: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default MovieCard;
