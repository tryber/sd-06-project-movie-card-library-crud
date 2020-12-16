import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { objectOf } from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const {
      id, title, storyline, imagePath,
    } = this.props.movie;
    return (
      <div data-testid="movie-card">
        Movie Card
        <div>
          <img src={imagePath} alt="Movie" />
          <p>{title}</p>
          <p>{storyline}</p>
        </div>
        <span>
          <Link to={`/movies/${id}`}>
            VER DETALHES
          </Link>
        </span>
      </div>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.arrayOf(objectOf).isRequired };
export default MovieCard;
