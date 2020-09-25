import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends Component {
  render() {
    const { id, imagePath, title, subtitle, storyline } = this.props.movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <div>
          <img src={imagePath} alt={`Movie: ${title}`} />
        </div>
        <br />
        <div>
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
        </div>
        <div>
          <Link to={`/movies/${id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.objectOf.isRequired };

export default MovieCard;
