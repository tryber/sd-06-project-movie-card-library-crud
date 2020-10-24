import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline } } = this.props;

    return (
      <div data-testid="movie-card">
        Movie Card
        <div>
          <h1>{title}</h1>
          <p>{storyline}</p>
        </div>
      </div>
    );
  }
}

export default MovieCard;
