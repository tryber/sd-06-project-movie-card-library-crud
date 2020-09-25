import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.getMovieDetails = this.getMovieDetails.bind(this);

    this.state = {
      load: true,
      movie: {},
    };
  }

  componentDidMount() {
    const movieID = this.props.match.params.id;
    this.getMovieDetails(movieID);
  }

  async getMovieDetails(movieID) {
    this.setState(async () => {
      const movie = await movieAPI.getMovie(movieID);
      this.setState({ load: false, movie });
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { load, movie } = this.state;
    const {
      id, title, storyline, imagePath, genre, rating, subtitle,
    } = movie;

    return (load ? <Loading /> : (
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
    ));
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
