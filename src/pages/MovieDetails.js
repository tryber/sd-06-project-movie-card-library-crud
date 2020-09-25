import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import '../App.css';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };
    this.fetchMovie = this.fetchMovie.bind(this);
    this.handleDeleteLink = this.handleDeleteLink.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  handleDeleteLink() {
    const { id } = this.props.match.params;
    movieAPI.deleteMovie(id);
  }

  async fetchMovie() {
    const id = this.props.match.params.id;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      loading: false,
    });
  }

  render() {
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const { loading } = this.state;

    return (
      <div>
        { loading ? <Loading /> :
        <div>
          <div data-testid="movie-details">
            <img alt="Movie Cover" src={`../${imagePath}`} />
            <p>{`Title: ${title}`}</p>
            <p>{`Subtitle: ${subtitle}`}</p>
            <p>{`Storyline: ${storyline}`}</p>
            <p>{`Genre: ${genre}`}</p>
            <p>{`Rating: ${rating}`}</p>
          </div>
          <div>
            <div className="Link">
              <Link to={`/movies/${id}/edit`}>EDITAR</Link>
            </div>
            <div className="Link">
              <Link to="/">VOLTAR</Link>
            </div>
            <div className="Link">
              <Link to="/" onClick={this.handleDeleteLink}>DELETAR</Link>
            </div>
          </div>
        </div>
        }
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
