import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Link, Redirect } from 'react-router-dom';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
      notFound: false,
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI
      .getMovie(id)
      .then((response) =>
        this.setState({ movie: response, loading: false, id: response.id }),
      )
      .catch(() => this.setState({ loading: false, notFound: true }));
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, loading, notFound, id } = this.state;
    if (loading) return <Loading />;
    if (notFound) return <Redirect to="/404-error" />;
    const { title, storyline, imagePath, genre, subtitle, rating } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to={'/'}>VOLTAR</Link>
        <Link to="/" onClick={() => movieAPI.deleteMovie(id)}>
          DELETAR
        </Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
