import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, subtitle, id } = movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <div className="movie-card-body">
          <img src={imagePath} className="movie-card-image" alt={`Movie: ${title} ${subtitle}`} />
          <h4 className="movie-card-title">{title}</h4>
          <p className="movie-card-subtitle">{subtitle}</p>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <Link to={`/movies/${id}`} className="links">VER DETALHES</Link>
      </div>
    );
  }
}
MovieCard.propTypes = { movies: PropTypes.arrayOf.isRequired };
export default MovieCard;
