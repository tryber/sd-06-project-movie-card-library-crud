import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {

  render() {
    const { movie: { title, subtitle, storyline, imagePath, id } } = this.props;
    return (
      <div data-testid="movie-card">
        <h2>{title}</h2>
        <img src={imagePath} alt={title} />
        <h3>{subtitle}</h3>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`} >VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
