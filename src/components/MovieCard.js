import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, id } = this.props.movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <p className="movie-card-storyline">{storyline}</p>
        </div><br />
        <div className="detaisl">
          <Link to={`/movies/${id}`}>VER DETALHES</Link>
        </div><br />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({ title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired }).isRequired,
};

export default MovieCard;
