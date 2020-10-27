import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.loadApiDetails();
  }

  async loadApiDetails() {
    const { id } = this.props.match.params;
    const apiDetails = await movieAPI.getMovie(id);
    this.setState({
      movie: apiDetails,
      loading: false,
    });
  }

  render() {
    const { id, title, subtitle, imagePath, storyline, genre, rating } = this.state.movie;
    const { loading } = this.state;
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/">VOLTAR</Link>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = { match: PropTypes.objectOf(Array).isRequired };

export default MovieDetails;
