import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor() {
    super();

    this.deleteCard = this.deleteCard.bind(this);

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

  deleteCard() {
    const { id } = this.props.match.params;
    movieAPI.deleteMovie(id);
  }

  render() {
    if (this.state.loading === true) {
      return <Loading />;
    }
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movies;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={this.deleteCard}>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MovieDetails;
