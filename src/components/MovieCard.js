import React from 'react';
import { Link } from 'react-router-dom';


class MovieCard extends React.Component {
  render() {
    return (
      <div data-testid="movie-card">
        Movie Card
        <section>title</section>
        <section>storyline</section>
        <Link>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
