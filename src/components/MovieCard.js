import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const detailsPath = `/movies/${movie.id}`;

    return (
      <div className="movie-card" data-testid="movie-card">
        <div className="imageDiv">
          <h1 className="movie-card-title">{movie.title}</h1>
          <img src={movie.imagePath} className="movie-card-image" alt="Cover of the movie" />
        </div>
        <div>
          <p className="movie-card-storyline">{movie.storyline}</p>
          <Link to={detailsPath}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  imagePath: PropTypes.string,
  bookmarked: PropTypes.bool,
  genre: PropTypes.string,
}) }.isRequired;

export default MovieCard;
