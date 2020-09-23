import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';


class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: false,
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  fetchMovie(id) {
    this.setState({ loading: true },
      async () => {
        this.setState({ movie: await movieAPI.getMovie(id), loading: false });
      }
    );
  }

  componentDidMount() { 
    const { id } = this.props.match.params;
    this.fetchMovie(id);
  }

  async handleDelete() {
    const { id } = this.props.match.params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { id } = this.props.match.params;
    const { loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <h4>{title}</h4>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div className="actions">
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <button
            type="button"
            onClick={this.handleDelete}
          >
            <Link to="/">DELETAR</Link>
          </button>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: {
      id: PropTypes.number,
    },
  }).isRequired,
};
