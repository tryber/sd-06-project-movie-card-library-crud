import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super()
    this.fetchMovie = this.fetchMovie.bind(this);
    this.state = {
      loading: false,
      movie: {},
    }
  }

  componentDidMount() {
    this.fetchMovie()
  }

  async fetchMovie() {
    this.setState(
      { loading: true },
      async () => {
        const movieGot = await movieAPI.getMovie(this.props.match.params.id);
        this.setState({
          loading: false,
          movie: movieGot,
        });
      },
    );
  }


  renderMovie() {
    const { movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/">VOLTAR</Link>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return loading ? <Loading /> : this.renderMovie();
  }
}

export default MovieDetails;
