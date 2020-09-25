import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.deleteMovies = this.deleteMovies.bind(this);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const id = this.props.match.params.id;
    const filmes = await movieAPI.getMovie(id);
    this.setState({
      movies: filmes,
      loading: false,
    });
  }

  async deleteMovies() {
    const id = this.props.match.params.id;
      await movieAPI.deleteMovie(id);
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movies;
    const { loading } = this.state;

    return (
      <div className="moviedetails-container">
        {(loading) ? <Loading /> :
        <div className="movie-details" data-testid="movie-details">
          <img className="moviedetails-img" alt="Movie Cover" src={`../${imagePath}`} />
          <div className="moviedetails-body">
            <h4 className="moviedetails-title">{`Title${title}`}</h4>
            <h5 className="moviedetails-subtitle">{`Subtitle: ${subtitle}`}</h5>
            <p className="moviedetails-storyline">{`Storyline: ${storyline}`}</p>
            <p>{`Genre: ${genre}`}</p>
            <p className="moviedetails-rating">{`Rating: ${rating}`}</p>
            <div className="moviedetails-options">
              <div className="moviedetails-back-div">
                <Link className="back-link link" to={'/'}>VOLTAR</Link>
              </div>
              <div className="moviedetails-edit-div">
                <Link className="edit-link link" to={`/movies/${id}/edit`}>EDITAR</Link>
              </div>
              <div className="moviedetails-button-div">
                <button className="moviedetails-button" type='button' onClick={this.deleteMovies} >
                  <Link className="button-link link" to={'/'}>DELETAR</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        }
      </div>
    );
  }
}

MovieDetails.propTypes = { match: propTypes.objectOf(Array).isRequired };

export default MovieDetails;
