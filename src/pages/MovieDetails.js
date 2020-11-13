import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import * as movieAPI from '../services/movieAPI';
// import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: {},
    };

    this.fetchMovie = this.fetchMovie.bind(this);
    this.renderIdMovie = this.renderIdMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    this.setState(
      { loading: true },
      async () => {
        const { id } = this.props.match.params;
        const movieInfo = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          movie: movieInfo,
        });
      },
    );
  }

  renderIdMovie(movie) {
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${movie.imagePath}`} />
        <h2>{`Title: ${movie.title}`}</h2>
        <h3>{`Subtitle: ${movie.subtitle}`}</h3>
        <p>{`Storyline: ${movie.storyline}`}</p>
        <p>{`Genre: ${movie.genre}`}</p>
        <p>{`Rating: ${movie.rating}`}</p>
        <button><Link to="/">VOLTAR</Link></button>
        <button><Link to={`/movies/${movie.id}/edit`}>EDITAR</Link></button>
      </div>
    );
  }

  render() {
    const { loading, movie } = this.state;
    const loadingElement = <span>Carregando...</span>;
    return (
      <div data-testid="movie-list">
        {loading ? loadingElement : this.renderIdMovie(movie)}
      </div>
    );
  }
}

export default MovieDetails;
