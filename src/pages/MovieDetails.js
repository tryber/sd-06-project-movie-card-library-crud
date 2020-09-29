import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, isLoading } = this.props;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    
    return isLoading ? <Loading /> : (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/" classname="links">Voltar</Link>
        <Link to="/movies/:id/edit"  classname="links" >Editar</Link>
      </div>
    ); 
  }
}
export default MovieDetails;
