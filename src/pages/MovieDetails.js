import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';


import { Loading } from '../components';


class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { id } = this.props.match.params;
    const movie = await movieAPI.getMovie(id);
    this.setState({ movie });
  }

  render() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    const isObjectEmpty = Object.values(movie).length === 0;

    if (isObjectEmpty) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}
// verified how use in this case, here:
// https://stackoverflow.com/questions/47519612/eslint-match-is-missing-in-props-validation-react-prop-types/47519751
MovieDetails.propTypes = {
  match: {
    params: {
      id: PropTypes.number.isRequired,
    }.isRequired,
  }.isRequired,
};

export default MovieDetails;
