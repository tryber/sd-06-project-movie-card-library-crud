import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, id } = this.props.movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <br />Movie Card
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
MovieCard.propTypes = { movie: PropTypes.objectOf(Array).isRequired };
export default MovieCard;
