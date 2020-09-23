import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const id = this.props.match.params.id;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      isLoading: false,
    });
  }

  render() {
    const { isLoading, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        {(isLoading) ? <Loading /> : false}
        <div>
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <h1>{`Title: ${title}`}</h1>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
        </div>
        <button type="button"><Link to={`/movies/${id}/edit`}>EDITAR</Link></button>
        <button type="button"><Link to="/">VOLTAR</Link></button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string,
    storyline: propTypes.string,
    imagePath: propTypes.string,
    genre: propTypes.string,
    rating: propTypes.number,
    subtitle: propTypes.string,
    id: propTypes.string,
  }).isRequired,
};

export default MovieDetails;
