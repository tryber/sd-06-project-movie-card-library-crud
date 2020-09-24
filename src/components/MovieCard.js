import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline, imagePath } = movie;

    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt="Movie Poster"/>
        <div>
          <h4>{title}</h4>
          <p>{storyline}</p>
        </div>
      </div>
    );
  }
}

export default MovieCard;
