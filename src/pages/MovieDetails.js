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
    this.deleteMovie = this.deleteMovie.bind(this);
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

  async deleteMovie() {
    const movieId = this.props.match.params.id;
    const movie = await movieAPI.deleteMovie(movieId);
  }

  render() {
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { id } = this.props.match.params;

    return (
      <div data-testid="movie-details">
        <div>
          {(loading) ? <Loading /> : false}
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <h4>{`Title: ${title}`}</h4>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
        </div>
        <button type="button"><Link to={`/movies/${id}/edit`}>EDITAR</Link></button>
        <button type="button"><Link to="/">VOLTAR</Link></button>
        <button type="button" onClick={this.deleteMovie}><Link to="/">DELETAR</Link></button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired }).isRequired,
  }).isRequired,
};
export default MovieDetails;
