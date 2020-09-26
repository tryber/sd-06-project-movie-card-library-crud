import React from 'react';
import { Link } from "react-router-dom";

class MovieCard extends React.Component {
  render() {
    const { title, storyline, id } = this.props.movie;

    return (
      <div data-testid="movie-card">
        <h3>{title}</h3>
        <h4>{storyline}</h4>
        <Link to={`/movies/${id}`} >VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
