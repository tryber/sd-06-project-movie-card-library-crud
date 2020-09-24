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

    this.eraseMovie = this.eraseMovie.bind(this);
  }

  componentDidMount() {
    this.movieById();
  }

  async movieById() {
    this.setState(
      { loading: true },
      async () => {
        const { id } = this.props.match.params;
        const movieObj = await movieAPI.getMovie(id);

        this.setState({
          movie: movieObj,
          loading: false,
        });
      },
    );
  }

  eraseMovie() {
    const { id } = this.props.match.params;

    movieAPI.deleteMovie(id);
  }

  render() {
    if (this.state.loading === true) {
      return (<Loading />);
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
        <div>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
          <Link to="/" onClick={this.eraseMovie} >DELETAR</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired,
  }).isRequired,
};

export default MovieDetails;
