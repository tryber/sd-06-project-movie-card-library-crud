import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
    };

    this.searchMoviesList = this.searchMovieDetails.bind(this);
  }

  componentDidMount() {
    this.searchMovieDetails();
  }

  async searchMovieDetails() {
    // const id = this.props.match.params.id;
    // const movie = await movieAPI.getMovie(id);
    // this.setState({ movie });
    const { match } = this.props;
    const movie = await movieAPI.getMovie(match.params.id);
    this.setState({ movie });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie } = this.state;
    const {
      title, storyline, imagePath, genre, rating, subtitle, id,
    } = movie;

    if (movie.length === 0) {
      return (<Loading />);
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{title}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        </div>
        <div>
          <Link to={'/'}>VOLTAR</Link>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
