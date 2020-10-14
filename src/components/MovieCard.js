import React from 'react';
import { Link } from 'react-router-dom';

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
/* MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
}; */
export default MovieCard;
