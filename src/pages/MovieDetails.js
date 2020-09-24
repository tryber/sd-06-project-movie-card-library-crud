import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super();

    this.fetchMovie = this.fetchMovie.bind(this);
    this.disableLoadingMessage = this.disableLoadingMessage.bind(this);

    this.state = {
      receivedMovieId: props.match.params.id,
      isLoading: true,
      movie: {},
    };
  }

  async componentDidMount() {
    const movie = await movieAPI.getMovie(this.state.receivedMovieId);
    this.disableLoadingMessage();
    this.fetchMovie(movie);
  }

  disableLoadingMessage() {
    this.setState({ isLoading: false });
  }

  fetchMovie(movie) {
    this.setState({ movie });
  }

  render() {
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        {
          this.state.isLoading
            ? <Loading />
            : <div>
              <img alt="Movie Cover" src={`../${imagePath}`} />
              <p>{`Title: ${title}`}</p>
              <p>{`Subtitle: ${subtitle}`}</p>
              <p>{`Storyline: ${storyline}`}</p>
              <p>{`Genre: ${genre}`}</p>
              <p>{`Rating: ${rating}`}</p>
              <Link to={`/movies/${id}/edit`}>EDITAR</Link>
              <Link to="/">VOLTAR</Link>
            </div>
        }
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
