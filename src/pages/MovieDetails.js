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
  }

  componentDidMount() {
    const movieId = this.props.match.params.id;
    movieAPI.getMovie(movieId).then((response) => this.setState(() => {
      const movie = response;
      return ({ movie, loading: false });
    }));
  }

  render() {
    if (this.state.loading) return <Loading />;


    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const { id } = this.props.match.params;

    return (
      <div className="movie-detailed-container">
        <div className="movie-detailed-card" data-testid="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <h1 className="movie-detailed-card-title">{title}</h1>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <Link to={`/movies/${id}/edit`} className="see-details-detailed">EDITAR</Link>
          <Link to="/" className="see-details-detailed">VOLTAR</Link>
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
