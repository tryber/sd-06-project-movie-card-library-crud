import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: null,
      load: true,
    };

    this.requestMovie = this.requestMovie.bind(this);
    this.handleDeleteMovie = this.handleDeleteMovie.bind(this);
    this.renderMovieDetails = this.renderMovieDetails.bind(this);
    
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.requestMovie(id);
  }

  async requestMovie(id) {
    this.setState(
      { load: true },
      async () => {
        const movie = await movieAPI.getMovie(id);
        this.setState({
          load: false,
          movie,
        });
      });
  }

  async handleDeleteMovie() {
    const { id } = this.state.movie;
    await movieAPI.deleteMovie(id)
  }

  renderMovieDetails() {
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    return (
      <div>
        <img src={`../${imagePath}`} alt="Movie Cover" />
        <h4>Title: {title}</h4>
        <h5>Subtitle: {subtitle}</h5>
        <p>Storyline: {storyline}</p>
        <p>Genre: {genre}</p>
        <p>Rating: {rating}</p>
        <div>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <button onClick={this.handleDeleteMovie}>
            <Link to={'/'}>DELETAR</Link>
          </button>
          <Link to={'/'}>VOLTAR</Link>
        </div>
      </div>
    );
  }

  render() {
    const { load } = this.state;
    return (
      <div data-testid="movie-details">
        {load ? <Loading /> : this.renderMovieDetails()}
      </div>
    );
  }
}

export default MovieDetails;
