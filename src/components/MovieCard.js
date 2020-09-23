import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const {
      id,
      title,
      storyline,
      imagePath,
    } = this.props.movie;

    return (
      <div className="movie-card" data-testid="movie-card">
        <article>
          <div>
            <img src={imagePath} alt="Movie" />
          </div>
          <p>{ title }</p>
          <p>{ storyline }</p>
          <hr />
          <Link to={`/movies/${id}`}>VER DETALHES</Link>
        </article>
      </div>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.objectOf(PropTypes.string).isRequired };

export default MovieCard;
