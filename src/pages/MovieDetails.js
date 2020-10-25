import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      loading: false,
    };
    this.renderMovie = this.renderMovie.bind(this);
  }

  componentDidMount() {
    this.renderMovie();
  }

  async renderMovie() {
    const { id } = this.props.match.params;
    const resultAPI = await movieAPI.getMovie(id);
    this.setState({
      movie: resultAPI,
      loading: true,
    });
  }

  render() {
    const { loading, movie } = this.state;
    if (loading === false) {
      return <Loading />;
    }

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        <h1>Movie Details</h1>
        <h2>{`Title: ${title}`}</h2>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default MovieDetails;
