import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.fetchGetMovie = this.fetchGetMovie.bind(this);

    this.state = {
      movie: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchGetMovie();
  }

  async fetchGetMovie() {
    const { match } = this.props;
    const promiseMovie = await movieAPI.getMovie(match.params.id);
    await this.setState({ movie: promiseMovie, loading: false });
  }

  render() {
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        {this.state.loading === true ?
          <Loading /> :
          <div>
            <img alt="Movie Cover" src={`../${imagePath}`} />
            <p>{`Title: ${title}`}</p>
            <p>{`Subtitle: ${subtitle}`}</p>
            <p>{`Storyline: ${storyline}`}</p>
            <p>{`Genre: ${genre}`}</p>
            <p>{`Rating: ${rating}`}</p>
            <Link to="/">VOLTAR</Link>
            <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          </div>}
      </div>
    );
  }
}

export default MovieDetails;
