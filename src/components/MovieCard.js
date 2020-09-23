import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { imagePath = "", rating = 0, title = "", subtitle = "" } = this.props.movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img src={imagePath} alt={title} />
        <section className="movie-card-body">
          <h1 className="movie-card-title">{title}</h1>
          <h2 className="movie-card-subtitle">{subtitle}</h2>
        </section>
        <div className="movie-card-rating" data-testid="rating">
          <span className="rating">{rating}</span>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    bookmarked: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }),
}

export default MovieCard;

/*
bookmarked: true
genre: "action"
id: 1
imagePath: "images/Kingsglaive_Final_Fantasy_XV.jpg"
rating: 4.5
storyline: "King Regis, who oversees the land of Lucis,
commands his army of soldiers to protect the kingdom from the Niflheim
empire's plans to steal the sacred crystal."
subtitle: "Final Fantasy XV"
title: "Kingsglaive"
<prototype>: Object { … }
MovieCard.js:6
*/
