import React from 'react';
import {Link} from 'react-router-dom';

class MovieCard extends React.Component {


  render() {
    const { storyline, title, id } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <h1>{title}</h1>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
