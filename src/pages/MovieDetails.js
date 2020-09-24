import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super();

    this.fetchMovie = this.fetchMovie.bind(this);
    this.disableLoadingMessage = this.disableLoadingMessage.bind(this);

    this.state = {
      receivedMovieId: props.match.params.id,
      isLoading: true,
      movie: {},
    };
  }

  async componentDidMount() {
    const movie = await movieAPI.getMovie(this.state.receivedMovieId);
    this.disableLoadingMessage();
    this.fetchMovie(movie);
  }

  disableLoadingMessage() {
    this.setState({ isLoading: false });
  }

  fetchMovie(movie) {
    this.setState({ movie });
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    
    return (
      <div data-testid="movie-details">
        {
          this.state.isLoading
            ? <Loading />
            : <div>
              <img alt="Movie Cover" src={`../${imagePath}`} />
              <p>{`Title: ${title}`}</p>
              <p>{`Subtitle: ${subtitle}`}</p>
              <p>{`Storyline: ${storyline}`}</p>
              <p>{`Genre: ${genre}`}</p>
              <p>{`Rating: ${rating}`}</p>
            </div>
        }
      </div>
    );
  }
}

export default MovieDetails;
