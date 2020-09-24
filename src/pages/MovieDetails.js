import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';

import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super();

    this.fetchAPI = this.fetchAPI.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    const { id: movieId } = props.match.params;

    this.state = {
      isLoading: true,
      movieId,
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async handleDelete(movieId) {
    const { deleteMovie } = movieAPI;
    await deleteMovie(movieId);
  }

  async fetchAPI() {
    const { getMovie } = movieAPI;
    const { movieId } = this.state;

    const data = await getMovie(movieId);

    this.setState(() => (
      {
        movie: data,
        isLoading: false,
      }
    ));
  }


  render() {
    const { isLoading } = this.state;

    if (isLoading) return <Loading />;

    const { id, title, storyline, imagePath, genre, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <Link to={`/movies/${id}/edit`} >EDITAR</Link>
        <Link to="/" onClick={() => this.handleDelete(id)} >DELETAR</Link>
        <Link to="/" >VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
