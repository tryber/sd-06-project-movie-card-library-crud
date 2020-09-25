import React from 'react';
import './MovieCard.css';


class MovieCard extends React.Component {
  render() {
    const { title, imagePath: imgSrc, subtitle, storyline, id, rating, bookmarked, genre} = this.props.movie;

    return (
      <div className="movie-card" data-testid="movie-card">
        <img src={imgSrc} />
        <h1>{title}</h1>
        <p>{storyline}</p>
        <p className="see-details">VER DETALHES</p>
      </div>
    );
  }
}

export default MovieCard;
