import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      requisition: false,
    };
  }

  async componentDidMount() {
    const { getMovie } = movieAPI;
    const { id } = this.props.match.params;
    const movie = await getMovie(id);
    this.setNewState(movie);
  }

  setNewState(newState) {
    this.setState({
      movie: newState,
      requisition: true,
    });
  }

  render() {
    const { movie, requisition } = this.state;
    const { id } = this.props.match.params;
    const { deleteMovie } = movieAPI;
    // Change the condition to check the state
    // if (true) return <Loading />;
    if (requisition === false) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h4>{`Title: ${title}`}</h4>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
          <Link to="/" onClick={() => deleteMovie(id)}>DELETAR</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: propTypes.shape({
    isExact: propTypes.bool,
    params: propTypes.shape({
      id: propTypes.string,
      path: propTypes.string,
      url: propTypes.string,
    }),
    path: propTypes.string,
    url: propTypes.string,
  }).isRequired,
};

export default MovieDetails;
