import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const {title, subtitle, imagePath, genre, storyline} = movie
    return (
      <div data-testid="movie-card">
        <div><img src={imagePath} /></div>
        <div>{title}</div>
        <div>{subtitle}</div>
        <div>{genre}</div>
        <div>{storyline}</div>

      </div>
    );
  }
}

export default MovieCard;
