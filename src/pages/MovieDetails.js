import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: {},
    };
    this.renderCard = this.renderCard.bind(this);
    this.handleApi = this.handleApi.bind(this);
  }

  componentDidMount() {
    this.handleApi();
  }

  handleApi() {
    this.setState({ loading: true }, async () => {
      const { id } = this.props.match.params;
      const movieCard = await movieAPI.getMovie(id);
      this.setState({
        loading: false,
        movie: movieCard,
      });
    });
  }

  renderCard(movie) {
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${movie.imagePath}`} />
        <p>{`Title: ${movie.title}`}</p>
        <p>{`Subtitle: ${movie.subtitle}`}</p>
        <p>{`Storyline: ${movie.storyline}`}</p>
        <p>{`Genre: ${movie.genre}`}</p>
        <p>{`Rating: ${movie.rating}`}</p>
        <button><Link to={`/movies/${movie.id}/edit`}>EDITAR</Link></button>
        <button><Link to="/">VOLTAR</Link></button>
      </div>
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie } = this.state;
    return this.state.loading ? <Loading /> : this.renderCard(movie);
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params:
    PropTypes.shape({ id: PropTypes.number.isRequired })
    .isRequired,
  }).isRequired,
};
export default MovieDetails;
