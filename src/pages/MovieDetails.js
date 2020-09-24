import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.fetchMovie = this.fetchMovie.bind(this);

    this.state = {
      movie: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    console.table(this.props.match);
    this.fetchMovie();
  }

  async fetchMovie() {
    const { id } = this.props.match.params;
    const fetchedMovie = await movieAPI.getMovie(id);
    this.setState(() => ({
      movie: fetchedMovie,
      isLoading: false,
    }));
  }

  render() {
    const { isLoading, movie } = this.state;
    const { title, storyline, imagePath, genre, subtitle } = movie;
    const { id } = this.props.match.params;

    return (
      (isLoading === true)
      ? <Loading />
      : (<div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>)
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
