import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: {},
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id)
      .then((movie) => this.setState({ movie, loading: false }));
  }

  async handleDelete() {
    await movieAPI.deleteMovie(this.state.movie.id);
  }

  render() {
    const { loading, movie } = this.state;
    const { id } = this.props.match.params;

    if (loading) return (<Loading />);

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-list" className="movie-list">
        <div data-testid="movie-details" className="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <span className="movie-details-title">{title}</span>
          <section className="movie-card-body">
            <p>{`Subtitle: ${subtitle}`}</p>
            <p>{`Storyline: ${storyline}`}</p>
            <p>{`Genre: ${genre}`}</p>
            <p>{`Rating: ${rating}`}</p>
          </section>
          <div className="movie-card-rating" data-testid="rating">
            <Link to={`/movies/${id}/edit`} className="movie-details-link">EDITAR</Link>
            <Link to={'/'} className="movie-details-link">VOLTAR</Link>
            <button type="button" onClick={this.handleDelete} className="delete-movie">
              <Link to={'/'}>DELETAR</Link>
            </button>
            <span className="rating">{rating}</span>
          </div>
        </div>
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
