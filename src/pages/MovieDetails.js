import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMovie, deleteMovie } from '../services/movieAPI';
import Loading from '../components/Loading';


class MovieDetails extends Component {
  constructor() {
    super();
    this.ApiMovie = this.ApiMovie.bind(this);
    this.MovieDelete = this.MovieDelete.bind(this);
    this.state = {
      movies: [],
      loading: true,
      shouldRedirect: false,
    };
  }
  componentDidMount() {
    this.ApiMovie();
  }
  async ApiMovie() {
    const cards = await getMovie(this.props.match.params.id);
    this.setState({
      movies: cards,
      loading: false,
    });
  }
  async MovieDelete() {
    const delItem = await deleteMovie(this.props.match.params.id);
    this.setState({
      movies: delItem,
      shouldRedirect: true,
    });
  }
  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading, movies } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movies;
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }
    return (loading ? <Loading /> : (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h3>{`Titulo: ${title}`}</h3>
        <p>{`Subtítulo: ${subtitle}`}</p>
        <p>{`Sinopse: ${storyline}`}</p>
        <p>{`Gênero: ${genre}`}</p>
        <p>{`Avaliação: ${rating}`}</p>
        <Link to="/">VOLTAR</Link>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <button onClick={this.MovieDelete}><Link to="/">DELETAR</Link></button>
      </div>
    ));
  }
}
MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
export default MovieDetails;
