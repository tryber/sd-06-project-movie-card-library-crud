import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      id: props.match.params.id,
      loading: true,
      movie: {},
    }
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  async fetchMovie() {
    const choosenMovie = await movieAPI.getMovie(this.state.id);
    this.setState({
      loading: false,
      movie: choosenMovie,
    });
  }

  componentDidMount() {
    this.fetchMovie();
  }

  render() {
    const { loading, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    
    if (loading) {
      return <Loading />
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div>
    );
  }
}

export default MovieDetails;
