import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.updateStateMovie = this.updateStateMovie.bind(this);
    this.state = {
      movie: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.updateStateMovie();
  }
   
  updateStateMovie(id) {
    this.setState(
      { loading: true },
      async () => {
        const myMovie = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          movie: myMovie,
        });
      },
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { id } = this.props;
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = {movie};

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
