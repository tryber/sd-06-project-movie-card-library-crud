import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Loading } from '../components';
import { getMovie, deleteMovie } from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMovieEmpty: true,
      shouldRedirect: false,
      movie: {},
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    getMovie(match.params.id)
    .then((result) => {
      this.setState({
        movie: result,
        isMovieEmpty: false,
        shouldRedirect: false,
      });
    });
  }

  async handleDelete() {
    const { id } = this.state.movie;
    await deleteMovie(id);
  }

  render() {
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    if (this.state.isMovieEmpty) {
      return (
        <Loading />
      );
    }

    return (
      <div data-testid="movie-details">
        <section>
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
        </section>
        <nav className="nav-class">
          <span><Link to={`${id}/edit`}>EDITAR</Link></span>
          <span><Link to={'/'}>VOLTAR</Link></span>
        </nav>
        <div>
          <button type="button" onClick={this.handleDelete}>
            <Link to="/">DELETAR</Link>
          </button>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes =
{ match: PropTypes.objectOf(PropTypes.oneOfType(
  [PropTypes.bool, PropTypes.object, PropTypes.string],
  )).isRequired,
};

export default MovieDetails;
