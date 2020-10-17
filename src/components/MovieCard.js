import React from 'react';

class MovieCard extends React.Component {
  render() {
  const { title, storyline } = this.props.movie;
    return (
      <div data-testid="movie-card">]
        <h1> { title } </h1>
        <span> { storyline } </span>
      </div>
    );
  }
}

export default MovieCard;
