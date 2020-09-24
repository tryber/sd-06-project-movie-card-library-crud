import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, imagePath, id } = this.props.movie;

    return (
      <div data-testid="movie-card">
        <div>
          <img alt="Movie cover" src={imagePath} />
          <div>
            <h4>{title}</h4>
            <p>{storyline}</p>
          </div>
        </div>
        <nav>
          <Link to={`/movies/${id}`}>VER DETALHES</Link>
        </nav>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string,
    storyline: propTypes.string,
    imagePath: propTypes.string,
    id: propTypes.string,
  }).isRequired,
};

export default MovieCard;
