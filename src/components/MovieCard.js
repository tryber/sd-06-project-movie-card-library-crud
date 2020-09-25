import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline, imagePath } = movie;
    return (
      <div data-testid="movie-card">
        Movie Card
        <p>{ id }</p>
        <p>{ title }</p>
        <p>{ storyline }</p>
        <img src={ imagePath } />
        <div>
          <Link to={`/movies/${id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    storyLine: PropTypes.string.isRequired,
    // imagePath: PropTypes.string.isRequired,
  }).isRequired,
}

export default MovieCard;
