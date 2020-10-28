import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import MovieDetails from '../pages/MovieDetails';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, id } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <div className="movie-card-body">
          <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
          <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <Link to={`/movies/${id}`} className="links">VER DETALHES</Link>
        </div>
      </div>
    );
  }
}
MovieCard.propTypes = { movie: PropTypes.objectOf(Array).isRequired };
export default MovieCard;
