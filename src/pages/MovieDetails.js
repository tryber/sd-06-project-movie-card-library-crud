import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      movie: '',
      loading: true,
    };
  }

  componentDidMount() {
    const movieP = async () => {
      const movie = await movieAPI.getMovie(this.props.match.params.id);
      this.setState(({ movie, loading: false }));
    };
    movieP();
  }

  handleDelete() {
    const { id } = this.props.match.params;
    movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;

    if (this.state.loading) return <Loading />;

    if (this.state.redirect) return <Redirect to="/" />;

    return (
      <div data-testid="movie-details" className="movie-card">
        <img alt="Movie Cover" src={(imagePath.includes('http') ? imagePath : `../${imagePath}`)} />
        <div className="movie-card-info-dois">
          <h1>{title}</h1>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <div className="tools">
            <Link to={`/movies/${id}/edit`}>EDITAR</Link>
            <Link to="/" >VOLTAR</Link>
            <Link to="/" onClick={this.handleDelete}>DELETAR</Link>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.object,
    path: PropTypes.string,
    url: PropTypes.string,
  }),
};

MovieDetails.defaultProps = {
  match: {
    isExact: false,
    params: '',
    path: '',
    url: '',
  },
};

export default MovieDetails;
