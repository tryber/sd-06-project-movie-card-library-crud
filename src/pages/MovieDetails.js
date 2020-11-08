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
      isLoading: false,
    };
    this.delMovie = this.delMovie.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const { id } = this.props.match.params;
    const getApi = await movieAPI.getMovie(id);
    this.setState({
      movie: getApi,
      isLoading: true,
    });
  }

  async delMovie() {
    const { id } = this.props.match.params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { isLoading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;

    return !isLoading ? <Loading /> :
     (
       <div data-testid="movie-details">
         <img alt="Movie Cover" src={`../${imagePath}`} />
         <p>{`Title: ${title}`}</p>
         <p>{`Subtitle: ${subtitle}`}</p>
         <p>{`Storyline: ${storyline}`}</p>
         <p>{`Genre: ${genre}`}</p>
         <p>{`Rating: ${rating}`}</p>
         <Link to={'/'} className="links"> VOLTAR</Link>
         <button
           type="button"
           onClick={this.delMovie}
         >   await movieAPI.deleteMovie(id);
           <Link to={'/'} className="links">DELETAR</Link> </button>
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
