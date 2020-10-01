import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.chosenMovie();
  }

  async chosenMovie() {
    const movieId = this.props.match.params.id;
    const movie = await movieAPI.getMovie(movieId);
    this.setState({
      movie,
      loading: false,
    });
  }

  render() {
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        {(loading) ? <Loading /> : false}
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <button type="button"><Link to={`/movies/${movie.id}/edit`}>EDITAR</Link></button>
        <button type="button"><Link to="/">VOLTAR</Link></button>
      </div>
    );
  }
}

export default MovieDetails;
