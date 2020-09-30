import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {

  constructor() {
    super();
    this.handleFetch = this.handleFetch.bind(this);
    this.state = {
      loading: true,
      movies: {},
    };
  }

  componentDidMount() {
    this.handleFetch();
  }

  async handleFetch() {
    const { id } = this.props.match.params;
    const result = await movieAPI.getMovie(id);
    this.setState({
      loading: false,
      movies: result,
    });
  }

  render() {
    const { loading } = this.state;

    if (loading) return <Loading />;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movies;

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
}

export default MovieDetails;
