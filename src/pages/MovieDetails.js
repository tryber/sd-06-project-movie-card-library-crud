import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';


class MovieDetails extends Component {
  constructor() {
    super();

    this.handleMovieDetailsElement = this.handleMovieDetailsElement.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = {
      movie: undefined,
      loading: true,
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    this.setState(
      { loading: true },
      async () => {
        const moviesList = await movieAPI.getMovie(id);

        this.setState({
          movie: moviesList,
          loading: false,
        });
      });
  }

  deleteMovie() {
    const { id } = this.state.movie;
    movieAPI.deleteMovie(id);
  }

  handleMovieDetailsElement() {
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <button><Link to="">VOLTAR</Link></button>
        <button><Link to={`/movies/${id}/edit`}>EDITAR</Link></button>
        <button type="button" onClick={this.deleteMovie}><Link to="">DELETAR</Link></button>
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        {loading ? <Loading /> : this.handleMovieDetailsElement()}
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
