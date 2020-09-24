import React, { Component } from 'react';
import Proptypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';


class MovieDetails extends Component {

  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
      id: 0,
    };
  }

  componentDidMount() {
    this.fetchDetails();
  }

  fetchDetails() {
    const { id } = this.props.match.params;
    this.setState({ loading: true }, () => {
      movieAPI.getMovie(id)
        .then((response) => this.setState(
          {
            movie: response,
            loading: false,
            id,
          },
        ));
    });
  }

  render() {
    const { loading, id, movie:
      { title, storyline, imagePath, genre, rating, subtitle,
      },
    } = this.state;

    if (loading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h4>{`Title: ${title}`}</h4>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div>
          <button><Link to={`/movies/${id}/edit`}>EDITAR</Link></button>
          <button><Link to="/">VOLTAR</Link></button>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
