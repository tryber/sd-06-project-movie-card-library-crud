import React from 'react';
import { Link } from 'react-router-dom';
import MovieData from '../services/movieData'


class MovieCard extends React.Component {
  render() {
    const movies = this.props
    const { imagePath, title, storyline, id } = movies.movie
    return (
      <div data-testid="movie-card">
        <img src={imagePath}></img>
        <h1>{title}</h1>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
