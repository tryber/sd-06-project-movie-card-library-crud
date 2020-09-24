import React from 'react';
import { Link, Route } from 'react-router-dom';
import MovieDetails from '../pages/MovieDetails';
import MovieList from '../pages/MovieList';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath, id } = movie;
    
    return (
      <div data-testid="movie-card">
       <img alt='texto qualquer' src={imagePath} />
       <h4> {title} </h4>
       <h5> {subtitle} </h5>
       <p> {storyline} </p>
       <Link to={`/movies/${id}`}> VER DETALHES</Link>
       <Route path="/movies/:id" render={(props) => <MovieDetails {...props} />}/>
      </div>
    );
  }
}

export default MovieCard;


{/* <Link to={`/users/${user.id}`} activeClassName="current">{user.name}</Link> */}