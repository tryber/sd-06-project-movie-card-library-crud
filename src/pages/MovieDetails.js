import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import movies from '../services/movieData';


class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id).then((result) => {
      this.setState({
        movies: result,
        loading: false,
      });
    });
  }

  render() {
    if (this.state.loading === true) {
      return <Loading />;
    }
    const { resultado } = this.state.movies;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = { resultado };
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>Editar</Link>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  movies: PropTypes.exact({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};


export default MovieDetails;
