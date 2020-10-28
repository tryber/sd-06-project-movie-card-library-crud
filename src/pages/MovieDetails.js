import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import MovieList from './MovieList';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      loading: false,
      deleted: false,
    };
    this.renderMovie = this.renderMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.renderMovie();
  }

  async renderMovie() {
    const { id } = this.props.match.params;
    const resultAPI = await movieAPI.getMovie(id);
    this.setState({
      movie: resultAPI,
      loading: true,
    });
  }

  async deleteMovie() {
    console.log('clicou');
    const { movie } = this.state;
    await movieAPI.deleteMovie(movie.id);
    this.setState({
      deleted: true
    });
  }

  render() {
    const { loading, movie, deleted } = this.state;
    if (loading === false) {
      return <Loading />;
    }

    if (deleted === true) {
      return <Redirect to={MovieList} />;
    }

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        <h2>{`Title: ${title}`}</h2>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <button onClick={this.deleteMovie} type="button">DELETAR</button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default MovieDetails;
