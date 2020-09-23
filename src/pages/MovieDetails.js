import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: {},
    };
    this.fetchMovie = this.fetchMovie.bind(this);
    this.renderMovie = this.renderMovie.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    this.setState(
      { loading: true },
      async () => {
        const { id } = this.props.match.params;
        const movieData = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          movie: movieData,
        });
      },
    );
  }

  async handleClick() {
    const { id } = this.props.match.params;
    await movieAPI.deleteMovie(id);
  }

  renderMovie(movie) {
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${movie.imagePath}`} />
        <p>{`Title: ${movie.title}`}</p>
        <p>{`Subtitle: ${movie.subtitle}`}</p>
        <p>{`Storyline: ${movie.storyline}`}</p>
        <p>{`Genre: ${movie.genre}`}</p>
        <p>{`Rating: ${movie.rating}`}</p>
        <button><Link to="">VOLTAR</Link></button>
        <button><Link to={`/movies/${movie.id}/edit`}>EDITAR</Link></button>
        <button type="button" onClick={this.handleClick}><Link to="">DELETAR</Link></button>
      </div>
    );
  }

  render() {
    const { movie } = this.state;
    return this.state.loading ? <Loading /> : this.renderMovie(movie);
  }
}

MovieDetails.propTypes = {
  match: propTypes.shape({
    id: propTypes.number,
  }).isRequired,
};

export default MovieDetails;
