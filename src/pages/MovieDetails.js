import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      isLoading: true,
    };
  }
  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const { id } = this.props.match.params.id;
    const getApi = await movieAPI.getMovie(id);
    this.setState({
      movie: getApi,
      isLoading: false,
    });
  }

  render() {
    const { isLoading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;

    return isLoading ? <Loading /> : (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        console.log(imagePath);
        <p>{`title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>

        <Link to={'/'} className="links"> VOLTAR</Link>
        <Link to={'/'} className="links">DELETAR</Link>
        <Link to={`/movies/${id}/edit`} className="links" >EDITAR </Link>
      </div>
    );
  }
}
MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
}.isRequired;

export default MovieDetails;
