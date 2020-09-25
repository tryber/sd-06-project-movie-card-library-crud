import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = { movie: [] };
  }

  componentDidMount() {
    this.getMovieData();
  }

  async getMovieData() {
    const fetchData = await movieAPI.getMovie(this.props.match.params.id);
    this.setState({ movie: fetchData });
  }

  render() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    // Change the condition to check the state
    // if (true) return <Loading />;
    while (movie.length === 0) {
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
        <div>
          <button><Link to={`/movies/${id}/edit`} >EDITAR</Link></button>
          <button><Link to="/">VOLTAR</Link></button>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
}

/* https://stackoverflow.com/questions/47519612/eslint-match-is-missing-in-props-validation-react-prop-types/47519751
Agradecimento especial: Paulo Lins */

export default MovieDetails;
