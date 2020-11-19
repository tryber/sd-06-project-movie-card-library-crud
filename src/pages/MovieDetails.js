import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: '',
      loading: true,
      redirect: false,
    };

    this.apagarFilme = this.apagarFilme.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id)
    .then((movie) => this.setState({ movies: movie, loading: false }));
  }

  apagarFilme() {
    const { id } = this.props.match.params;
    movieAPI.deleteMovie(id)
    .then(() => this.setState({ redirect: true }));
  }

  render() {
    const { loading, movies, redirect } = this.state;
    if (loading) return <Loading />;
    if (redirect) return <Redirect to="/" />;

    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movies;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${movies.id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <button onClick={this.apagarFilme}><Link to="/">DELETAR</Link></button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

export default MovieDetails;
