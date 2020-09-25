import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {

    const{ title, storyline, id, imagePath } = this.props;

    return (
      <div data-testid="movie-card">
        <h4>{title}</h4>
        <img source={imagePath} />
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.shape({
  title: PropTypes.string,
  storyline: PropTypes.string,
  id: PropTypes.number,
  imagePath: PropTypes.string,
}).isRequired };

export default MovieCard;
