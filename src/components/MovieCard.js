import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    // const { movie } = this.props;
    const { movie: { title, storyline, imagePath, id } } = this.props;
    return (
      <div data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
        <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
        <p className="movie-card-storyline">{storyline}</p>
        <Link to={`movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.exact({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
export default MovieCard;
