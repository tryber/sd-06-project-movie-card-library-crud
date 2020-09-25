import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types'

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id,
      title,
      //  subtitle,
      storyline,
      //  rating,
      imagePath,
      //  bookmarked,genre 
      } = movie;

    return (
      <div data-testid="movie-card">
        <h1>{title}</h1>
        <img src={`../${imagePath}`} alt={title} />
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string.isRequired,
    imagePath:  propTypes.string.isRequired,
    storyline: propTypes.string.isRequired,
    id: propTypes.number.isRequired,
  })
}

export default MovieCard;
