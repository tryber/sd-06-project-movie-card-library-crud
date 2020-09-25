import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './movieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, imagePath, storyline, id } = movie;
    return (
      <div data-testid="movie-card" className="movie-card">
          <img src={imagePath} alt="Foto do filme" className="movie-card-image" />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <Link to={`/movies/${id}`} className="links">VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
