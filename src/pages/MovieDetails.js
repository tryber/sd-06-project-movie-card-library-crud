import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import './MovieDetails.css';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: [],
      loading: true,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const movieId = this.props.match.params.id;
    movieAPI.getMovie(movieId).then((response) => this.setState(() => {
      const movie = response;
      return ({ movie, loading: false });
    }));
  }

  async handleDelete() {
    const movieId = this.state.movie.id;
    const response = await movieAPI.deleteMovie(movieId);
    return response.status === 'OK' ? '/' : '';
  }

  render() {
    if (this.state.loading) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;
    return (
      <div className="movie-detailed-container" data-testid="movie-details">
        <div className="movie-detailed-card">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <h1 className="movie-detailed-card-title">{title}</h1>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <Link to={`/movies/${id}/edit`} className="see-details-detailed">EDITAR</Link>
          <Link to="/" className="see-details-detailed">VOLTAR</Link>
          <Link to="/" onClick={this.handleDelete} className="see-details-detailed">DELETAR</Link>
        </div>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.defaultProps = {
  match: {},
  params: {},
  id: '',
};

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
