import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieCard.css';

class MovieCard extends React.Component {
  constructor(props) {
    super();

    this.state = {
      movieDetails: {
        id: props.movie.id,
        title: props.movie.title,
        storyline: props.movie.storyline,
        imagePath: props.movie.imagePath,
      },
    };
  }

  render() {
    const {
      id,
      title,
      storyline,
      imagePath,
    } = this.state.movieDetails;

    return (
      <div className="movie-card" data-testid="movie-card">
        <article>
          <div>
            <img src={imagePath} alt="Movie" />
          </div>
          <p>{title}</p>
          <p>{storyline}</p>
          <hr />
          <Link to={`/movies/${id}`}>VER DETALHES</Link>
        </article>
      </div>
    );
  }
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
}.isRequired;

export default MovieCard;
