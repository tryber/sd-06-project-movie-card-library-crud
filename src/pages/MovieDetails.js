import React, { Component } from 'react';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.fetchMovie = this.fetchMovie.bind(this);

    this.state = {
      movie: []
    }
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const result = await movieAPI.getMovie(this.props.match.params.id);
    this.setState({ movie: result });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (movie.length === 0) return <Loading />;

    return (
      <div>
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div>
      <div>
        <Link to={`/movies/${id}/edit`} >EDITAR</Link>
        <Link to={`/`} >VOLTAR</Link>
      </div>
      </div>
    );
  }
}

export default MovieDetails;
