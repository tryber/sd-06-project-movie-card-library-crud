import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
    };
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async handleClick(id) {
    await movieAPI.deleteMovie(id);
    return <Redirect to="/" />;
  }

  async fetchMovie() {
    const movie = await movieAPI.getMovie(this.props.match.params.id);
    this.setState({ movie });
  }

  render() {
    const { id } = this.props.match.params;
    const { movie } = this.state;
    if (movie === '') {
      return <Loading />;
    }

    const {
      title, storyline, imagePath, genre, rating, subtitle,
    } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <button><Link to="/">VOLTAR</Link></button>
        <button><Link to={`/movies/${id}/edit`}>EDITAR</Link></button>
        <button onClick={() => this.handleClick(id)}><Link to="/">DELETAR</Link></button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,

};

export default MovieDetails;
