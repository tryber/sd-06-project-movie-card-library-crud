import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { title, imagePath, storyline, id } = this.props.movie;
    return (
      <div data-testid="movie-card" className="movie-card" >
        <h4>{title}</h4>
        <img width="100%" src={imagePath}></img>
        <p>{storyline}</p>
        <Link className="view-details" to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
