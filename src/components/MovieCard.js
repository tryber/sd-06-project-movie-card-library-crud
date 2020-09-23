import React from 'react';

class MovieCard extends React.Component {
  render() {
    return (
      <div data-testid="movie-card">
        <span>{this.props.movie.title}</span>
      </div>
    );
  }
}

export default MovieCard;
