import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, subtitle, storyline, imagePath } = movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
        <div className="movie-card-body">
          <h4 data-test-id="movie-card-title" className="movie-card-title">{title}</h4>
          <h5 data-test-id="movie-card-subtitle" className="movie-card-subtitle">{subtitle}</h5>
          <p data-test-id="movie-card-storyline" className="movie-card-storyline">{storyline}</p>
          <Link to={`/movies/${id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.objectOf.isRequired };
export default MovieCard;
