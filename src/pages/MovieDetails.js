import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id).then((myFetchMovies) =>
    this.setState({
      movies: myFetchMovies,
      isLoading: false,
    }));
  }
  render() {
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movies;
    const { isLoading } = this.state;

    if (isLoading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/">VOLTAR</Link>
        <Link to={`/movies/${this.props.match.params.id}/edit`}>EDITAR</Link>   
      </div>
    );
  }
}

export default MovieDetails;
