import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './moviecard.css'

class MovieCard extends React.Component {

  render() {
    const { movie } = this.props;
    return (
      <div className='movie-list' data-testid="movie-card">
        <article key={movie.title}>
          <h4>{movie.title}</h4>
          <p>{movie.storyline}</p>
          <Link className='link' to={`/movies/${movie.id}`}>VER DETALHES</Link>
        </article>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,

};

export default MovieCard;

