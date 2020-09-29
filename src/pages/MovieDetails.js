import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.handleGetMovie = this.handleGetMovie.bind(this);
    this.state = {
      carregando: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.handleGetMovie();
  }

  async handleGetMovie() {
    const { match } = this.props;
    const movie = await movieAPI.getMovie(match.params.id);
    this.setState({
      movies: movie,
      carregando: false,
    });
  }

  render() {
    const { carregando } = this.state;
    const {
      title, storyline, imagePath,
      id, genre, rating, subtitle,
    } = this.state.movies;

    return carregando ? <Loading /> : (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/" onClick={() => movieAPI.deleteMovie(`${id}`)}>DELETAR</Link>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <br />
        <Link to="/">VOLTAR</Link>
        <br />
      </div>
    );
  }
}
export default MovieDetails;
