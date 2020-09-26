import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import movies from '../services/movieData';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };
  }
  componentDidMount() {
    return this.fetchAPIMovie()
  }
  async fetchAPIMovie() {
    const apiMovie = await movieAPI.getMovie(this.props.match.params.id);
    this.setState({ 
      movie: apiMovie,
      loading: false, 
  });
  }
  render() {
    if (this.state.loading === true ) {
      return <Loading />
    }

    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h2>{`Title: ${title}`}</h2>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${this.movieId}/edit`}>EDITAR</Link><br />
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
