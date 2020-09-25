import React from 'react';

import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const {id, title, subtitle, storyline, rating, imgPath} = this.props;
    return (
      <div data-testid="movie-card">
        <div>
          <img src={imgPath} alt={title}/>
        </div>
        <div>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>{storyline}</p>
          <span>{rating}</span>
        </div>
        <div>
          <button><Link to={`/movies/${id}`}>VER DETALHES</Link></button>
        </div>
      </div>
    );
  }
}

export default MovieCard;
