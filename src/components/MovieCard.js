import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, imagePath, id } = this.props.movie;

    return (
      <div data-testid="movie-card" className="movieCard">
        <div>
          <img src={imagePath} alt={title} className="content" />
          <h4>{title}</h4>
          <p className="storyline">{storyline}</p>
        </div>
        <div className="button-content">
          <Link to={`/movies/${id}`} className="button">VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: Proptypes.shape({
    title: Proptypes.string.isRequired,
    storyline: Proptypes.string.isRequired,
    imagePath: Proptypes.string.isRequired,
    id: Proptypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
