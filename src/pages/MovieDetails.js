import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getMovie, deleteMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.fetchMovie = this.fetchMovie.bind(this);
    this.deleteMovieHandler = this.deleteMovieHandler.bind(this);
    this.state = {
      movie: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { id } = this.props.match.params;
    const theMovie = await getMovie(id);
    this.setState({
      movie: theMovie,
      loading: false,
    });
  }
  
  async deleteMovieHandler() {
    const { movie } = this.state 
    const { id } = movie;
    await deleteMovie(id);
  }

  render() {
    const { loading, redirect } = this.state;
    const { movie } = this.state;
    const {
      id,
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } = movie;

    return (
      <div data-testid="movie-details">
        { loading ? <Loading /> : (
          <div>
            <img alt="Movie Cover" src={`../${imagePath}`} />
            <p>{`Title: ${title}`}</p>
            <p>{`Subtitle: ${subtitle}`}</p>
            <p>{`Storyline: ${storyline}`}</p>
            <p>{`Genre: ${genre}`}</p>
            <p>{`Rating: ${rating}`}</p>
            <Link to="/">VOLTAR</Link>
            <Link to={`/movies/${id}/edit`}>EDITAR</Link>
            <button  type="button" onClick={() => this.deleteMovieHandler()}> 
              <Link to="/">DELETAR</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

//  propTypes match:
//  https://stackoverflow.com/questions/47519612/eslint-
//  match-is-missing-in-props-validation-react-prop-types/47519751

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
