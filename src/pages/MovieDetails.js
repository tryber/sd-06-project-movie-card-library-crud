import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    movieAPI.getMovie(match.params.id).then((myFetchMovies) =>
    this.setState({
      movies: myFetchMovies,
      isLoading: false,
    }));
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movies;
    const { isLoading } = this.state;

    if (isLoading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/">VOLTAR</Link><br />
        <Link to={`/movies/${id}/edit`}>EDITAR</Link><br />
        <Link to="/" onClick={() => { movieAPI.deleteMovie(id); }}>
          DELETAR
        </Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default MovieDetails;
