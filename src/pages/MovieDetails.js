import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.fetchSingleMovie = this.fetchSingleMovie.bind(this);
    this.renderDetailedMovie = this.renderDetailedMovie.bind(this);
    this.renderDeleteMovieButton = this.renderDeleteMovieButton.bind(this);
    this.state = {
      movie: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchSingleMovie(id);
  }

  async fetchSingleMovie(id) {
    const { getMovie } = movieAPI;
    this.setState({ isLoading: true }, async () => {
      const requestReturn = await getMovie(id);
      this.setState({
        movie: requestReturn,
        isLoading: false,
      });
    });
  }

  renderDetailedMovie() {
    const { movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{title}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }

  renderDeleteMovieButton() {
    const { id } = this.props.match.params;
    const { deleteMovie } = movieAPI;
    return (<Link to="/" onClick={() => deleteMovie(id)}>DELETAR</Link>);
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return (<Loading />);
    }
    return (
      <main>
        {this.renderDetailedMovie()}
        {this.renderDeleteMovieButton()}
      </main>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
};

export default MovieDetails;
