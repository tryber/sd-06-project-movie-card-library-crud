import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, imagePath, storyline, id } = movie;

    return (
      <div data-testid="movie-card">
        <h1>{title}</h1>
        <p>{storyline}</p>>
        <img src={imagePath}></img>

        <Link to={`movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.string,
  title: propTypes.string,
  imagePath: propTypes.string,
  storyline: propTypes.string,
  id: propTypes.string
}

export default MovieCard;
