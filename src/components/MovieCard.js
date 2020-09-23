import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const {title, subtitle, storyline, imagePath } = movie;
    return (
      <div data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
      </div>
    );
  }
}

export default MovieCard;
