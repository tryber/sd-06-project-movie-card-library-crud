import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Rating from './Rating';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline, imagePath } = movie;

    return (
      <div className="movie-card" data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
        <div className="movie-card-body">
          <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
          <p className="movie-card-storyline">{storyline}</p>
          <div className="Link">
            <Link to={`/movies/${id}`}>VER DETALHES</Link>
          </div>
        </div>
          <div>
            <Rating key={movie.title} rating={movie.rating} />
          </div>
      </div>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  imagePath: PropTypes.string,
  bookmarked: PropTypes.bool,
  genre: PropTypes.string,
}) }.isRequired;

export default MovieCard;
