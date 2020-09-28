import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.renderDetails = this.renderDetails.bind(this);

    this.state = {
      details: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.renderDetails();
  }

  renderDetails() {
    this.setState({
      loading: true,
    }, async () => {
      const { match } = this.props;
      const requestMovie = await movieAPI.getMovie(match.params.id);

      this.setState({
        details: requestMovie,
        loading: false,
      });
    });
  }

  render() {
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.details;
    const { loading } = this.state;

    return (
      <div data-testid="movie-details">
        { loading ? <Loading /> : <div>
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <h1>{`Título: ${title}`}</h1>
          <p>{`Subtítulo: ${subtitle}`}</p>
          <p>{`Sinopse: ${storyline}`}</p>
          <p>{`Gênero: ${genre}`}</p>
          <p>{`Avaliação: ${rating}`}</p>

          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
        }
      </div>
    );
  }
}

export default MovieDetails;
