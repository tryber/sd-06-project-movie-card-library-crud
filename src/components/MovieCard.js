import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

class MovieCard extends React.Component {


  render() {
    const { storyline, title, id } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <h1>{title}</h1>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.isRequired,
    id: PropTypes.isRequired,
  }).isRequired
}

export default MovieCard;
