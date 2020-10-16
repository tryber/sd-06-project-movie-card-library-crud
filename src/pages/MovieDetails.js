import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super();

    this.state = {
      movie: '',
      loading: true,
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id)
    .then((response) => this.setState({ movie: response, loading: false }));
  }

  render() {
    const { movie, loading } = this.state;
    if (loading === true) { return <Loading /> }
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h1>{title}</h1>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{rating}</p>
        <Link to={`/`}>VOLTAR </Link>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
