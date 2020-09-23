import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { id, title, storyline, imagePath } = this.props.movie;

    return (
      <div data-testid="movie-card" id={id}>
        <p className="movie-card-title">{title}</p>
        <img src={imagePath} alt={`${title} movie poster`} className="movie-card-image"/>
        <p className="movie-card-story">{storyline}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;


// id: 1,
// title: 'Kingsglaive',
// subtitle: 'Final Fantasy XV',
// storyline: "King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",
// rating: 4.5,
// imagePath: 'images/Kingsglaive_Final_Fantasy_XV.jpg',
// bookmarked: true,
// genre: 'action',