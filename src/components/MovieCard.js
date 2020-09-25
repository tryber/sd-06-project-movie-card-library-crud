import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieCard.css';


class MovieCard extends React.Component {
  render() {
    // const { title, imagePath: imgSrc, subtitle, storyline, id, rating,
    //    bookmarked, genre } = this.props.movie;

    const { title, imagePath: imgSrc, storyline } = this.props.movie;

    return (
      <div className="movie-card" data-testid="movie-card">
        <img src={imgSrc} alt={title} />
        <h1>{title}</h1>
        <p>{storyline}</p>
        <Link to="/movies/:id" className="see-details">VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.defaultProps = {
  movie: {},
  title: '',
  imagePath: '',
  storyline: '',
};

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.string),
  title: PropTypes.string,
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
};
