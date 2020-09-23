import React from 'react';


class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, storyline } = movie;
    return (
      <div data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
        <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
        <p className="movie-card-storyline">{storyline}</p>
      </div>
    );
  }
}

export default MovieCard;
