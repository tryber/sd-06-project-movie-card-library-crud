import React, { Component } from 'react';
import '../App.css';
import Proptypes from 'prop-types';

import { Link, Redirect } from 'react-router-dom';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';


class MovieDetails extends Component {

  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
      id: 0,
      shouldRedirect: false,
    };

    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.fetchDetails();
  }

  fetchDetails() {
    const { id } = this.props.match.params;
    this.setState({ loading: true }, () => {
      movieAPI.getMovie(id)
        .then((response) => this.setState(
          {
            movie: response,
            loading: false,
            id,
          },
        ));
    });
  }

  deleteMovie() {
    const { id } = this.props.match.params;
    this.setState({ loading: true, shouldRedirect: false }, () => {
      movieAPI.deleteMovie(id)
        .then(() => this.setState({ shouldRedirect: true, loading: false }));
    });
  }

  render() {
    const { loading, id, shouldRedirect, movie:
      { title, storyline, imagePath, genre, rating, subtitle,
      },
    } = this.state;

    if (loading) return <Loading />;

    if (shouldRedirect) return <Redirect to="" />;

    return (
      <div data-testid="movie-details">
        <div>
          <h1 className="title">Movie Details</h1>
        </div>
        <div className="moviedetails">
          <div className="movieCard">
            <img alt="Movie Cover" src={`../${imagePath}`} className="content" />
            <h4>{`Title: ${title}`}</h4>
            <p>{`Subtitle: ${subtitle}`}</p>
            <p className="storyline">{`Storyline: ${storyline}`}</p>
            <p>{`Genre: ${genre}`}</p>
            <p>{`Rating: ${rating}`}</p>
            <div className="buttons">
              <Link to={`/movies/${id}/edit`} className="button">EDITAR</Link>
              <Link to="/" className="button">VOLTAR</Link>
              <Link onClick={this.deleteMovie} to className="button">DELETAR</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
