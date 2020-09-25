import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { imagePath, title, storyline, id } =  this.props.movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img src={imagePath} alt={title} />
        <h3>{title}</h3>
        <p>{storyline}</p>
        <div className="link">
          <Link to={`/movies/${id}`} >Details</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes =  { movie: PropTypes.objectOf.isRequired };

export default MovieCard;
