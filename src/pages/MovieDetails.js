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
      const { id } = this.props.match.params;
      const requestMovie = await movieAPI.getMovie(id);

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

export default MovieDetails;
