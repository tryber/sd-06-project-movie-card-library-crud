import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: false,
    };

    this.functionNeeded = this.functionNeeded.bind(this);
  }

  componentDidMount() {
    this.functionNeeded();
  }

  async functionNeeded() {
    const movieDownLoaded = await movieAPI.getMovie(this.props.match.params.id);
    this.setState({
      movie: movieDownLoaded,
      loading: true,
    });
  }

  render() {
    if (this.state.loading === false) {
      return (
        <Loading />
      );
    }
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <span><Link to={`/movies/${id}/edit`} >EDITAR</Link></span>
        <span><Link to="/">VOLTAR</Link></span>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: {
    params: {
      id: PropTypes.number.isRequired,
    },
  }.isRequired,
};

export default MovieDetails;
