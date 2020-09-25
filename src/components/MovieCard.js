import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { storyline, title, id } = this.props.movie;
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <h1>{title}</h1>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`} movie={movie}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.isRequired,
    id: PropTypes.isRequired,
  }).isRequired,
};

export default MovieCard;
