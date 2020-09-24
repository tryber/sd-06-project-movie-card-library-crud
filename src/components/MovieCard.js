import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: title, storyline, id, imagePath } = this.props;

    return (
      <div data-testid="movie-card">
        <h4>{title}</h4>
        <h3>{storyline}</h3>
        <img src={imagePath} alt={title} />
        <span>
          <Link to={`/movies/${id}`} >VER DETALHES</Link>
        </span>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }.isRequired,
};

export default MovieCard;
