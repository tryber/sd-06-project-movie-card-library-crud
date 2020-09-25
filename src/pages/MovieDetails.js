import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.deletMovie = this.deletMovie.bind(this);
    this.state = {
      movie: [],
      loading: true,
    };
  }
  componentDidMount() {
    const { match } = this.props;
    movieAPI.getMovie(match.params.id).then((answer) => {
      this.setState({
        movie: answer,
        loading: false,
      });
    });
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;
    const { loading } = this.state;

    if (loading === true) {
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
        <hr />
        <Link to="/">VOLTAR</Link><br />
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/" onClick={() => { movieAPI.deleteMovie(id); }}>DELETAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};
