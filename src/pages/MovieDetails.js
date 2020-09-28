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
      this.setState({
        details: await movieAPI.getMovie(this.props.match.params.id),
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
            <h1>{`title: ${title}`}</h1>
            <p>{`subtitle: ${subtitle}`}</p>
            <p>{`storyline: ${storyline}`}</p>
            <p>{`genre: ${genre}`}</p>
            <p>{`rating: ${rating}`}</p>

            <Link to={`/movies/${id}/edit`}>EDITAR</Link>
            <Link to="/">VOLTAR</Link>
          </div>
        }
      </div>
    );
  }
}

export default MovieDetails;
