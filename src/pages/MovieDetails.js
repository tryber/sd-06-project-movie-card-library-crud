import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';


import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super();

    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = {
      movieId: props.match.params.id,
      loading: true,
      movie: {},
    };
  }


  componentDidMount() {
    const { movieId } = this.state;
    console.log(movieId);
    movieAPI.getMovie(movieId).then((result) => {
      this.setState({
        loading: false,
        movie: result,
      });
    });
  }

  deleteMovie() {
    const { movieId } = this.state;
    movieAPI.deleteMovie(movieId);
  }

  render() {
    if (this.state.loading === true) return <Loading />;
    const { movie } = this.state;

    const { title, storyline, imagePath, genre, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <Link to={`${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={this.deleteMovie}>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: propTypes.objectOf(propTypes.any).isRequired,
};

export default MovieDetails;
