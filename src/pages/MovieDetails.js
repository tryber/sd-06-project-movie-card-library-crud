import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchMoviesDetail = this.fetchMoviesDetail.bind(this);

    this.state = {
      movies: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMoviesDetail();
  }

  async fetchMoviesDetail() {
    const movie = await movieAPI.getMovie(this.props.match.params.id);
    this.setState({
      movie,
      loading: false,
    });
  }

  render() {
    const { loading } = this.state;
    if (loading) return <Loading />;
    const { storyline, imagePath, genre, rating, subtitle, title } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${this.props.match.params.id}/edit`}>EDITAR</Link>
        <Link to={'/'}>VOLTAR</Link>
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
};

export default MovieDetails;
