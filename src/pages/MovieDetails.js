import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };

    this.searchMovieDetails = this.searchMovieDetails.bind(this);
  }

  componentDidMount() {
    this.searchMovieDetails();
  }

  async searchMovieDetails() {
    // const id = this.props.match.params.id;
    // const movie = await movieAPI.getMovie(id);
    // this.setState({ movie });
    const loading = false;
    const { match } = this.props;
    const movie = await movieAPI.getMovie(match.params.id);
    this.setState({ movie, loading });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie } = this.state;
    const {
      title, storyline, imagePath, genre, rating, subtitle, id,
    } = movie;

    if (this.state.loading) {
      return (<Loading />);
    }

    return (
      <div data-testid="movie-details">
        <p>{`Título: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        </div>
        <div>
          <Link to="/">VOLTAR</Link>
        </div>
        <button type="button">
          <Link to="/" onClick={() => movieAPI.deleteMovie(id)}>DELETAR</Link>
        </button>
      </div>
    );
  }
}

MovieDetails.propTypes = { match: PropTypes.number.isRequired };

export default MovieDetails;
