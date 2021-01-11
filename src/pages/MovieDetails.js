import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: [],
    };

    this.fetchMovie = this.fetchMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }


  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    this.setState(
      { loading: true },
      async () => {
        const movieJson = await movieAPI.getMovie(this.props.match.params.id);

        this.setState({
          loading: false,
          movie: movieJson,
        });
      },
    );
  }

  deleteMovie() {
    const movieId = this.state.movie.id;
    movieAPI.deleteMovie(movieId);
  }

  render() {
    // console.log(this.props.match);
    if (this.state.loading) {
      return <Loading />;
    }
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const { id } = this.props.match.params;
    const movieLink = `/movies/${id}/edit`;
    return (
      <div className="movie-details" data-testid="movie-details">
        {/* <p>{id}</p> */}
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={movieLink}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={this.deleteMovie}>DELETAR</Link>
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
