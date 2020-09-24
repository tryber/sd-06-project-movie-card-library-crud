import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: [],
    }

    this.fetchMovie = this.fetchMovie.bind(this);
  }


  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    this.setState(
      { loading: true },
      async () => {
        const movieJson = await movieAPI.getMovie(this.props.match.params.id);

        this.setState({
          loading: false,
          movie: movieJson,
        });
      }
    )
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    } else {
      const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
      const { id } = this.props.match.params;
      const movieLink = `/movies/${id}/edit`;
      return (
        <div class="movie-details" data-testid="movie-details">
          <p>{id}</p>
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <Link to={movieLink}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      );
    }
  }
}

export default MovieDetails;
