import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.renderDetails = this.renderDetails.bind(this);

    this.state = {
      loading: true,
      details: {},
    };
  }

  componentDidMount() {
    this.renderDetails();
  }

  async renderDetails() {
    const id = this.props.match.params.id;
    const detailsList = await movieAPI.getMovie(id);

    this.setState({
      loading: false,
      details: detailsList,
    });
  }

  render() {
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.details;
    const { loading } = this.state;

    return (
      <div>
        { loading ? <Loading /> :
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <div>
            <div><Link to={`${id}/edit`}>EDITAR</Link></div>
            <div><Link to="/">VOLTAR</Link></div>
          </div>
        </div>
        }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;

export default MovieDetails;
