import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = {};
    console.log(this.props.match.params.id); // apenas para assegurar o sucesso da chamada
    const { id } = this.props.match.params; // apenas para assegurar o sucesso da chamada
    return (
      <div data-testid="movie-details">
        <p>Testa se renderiza o id: {id} - digitado na URL</p>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div>
    );
  }
}

export default MovieDetails;
