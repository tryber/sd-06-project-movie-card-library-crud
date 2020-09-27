import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img alt="Imagem do Filme" className="movie-card-image" src={movies.imagePath} />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{movies.title}</h4>
          {/* <h5 className="movie-card-subtitle">{movies.subtitle}</h5>
          <p className="movie-card-storyline">{movies.storyline}</p> */}
          <Link to={`movies/${movies.id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.exact({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};


export default MovieCard;
