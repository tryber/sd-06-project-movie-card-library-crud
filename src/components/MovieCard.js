import React from 'react';
import * as movieAPI from '../services/movieAPI';
import PropTypes from 'prop-types';


class MovieCard extends React.Component {
  render() {
    const { imagePath = '', rating = 0, title = '', subtitle = '' } = this.props.movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img src={imagePath} alt={title} />
        <section className="movie-card-body">
          <h1 className="movie-card-title">{title}</h1>
          <h2 className="movie-card-subtitle">{subtitle}</h2>
        </section>
        <div className="movie-card-rating" data-testid="rating">
          <p> className="rating">{rating}</p>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }),
};

MovieCard.defaultProps = {
  movie: {},
};

export default MovieCard;
