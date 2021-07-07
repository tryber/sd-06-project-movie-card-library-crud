import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';


class MovieDetails extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id)
      .then((movie) => {
        this.setState({
          movie,
          loading: false,
        });
      });
  }

  async handleClick() {
    await movieAPI.deleteMovie(this.props.match.params.id);
    this.setState({
      loading: false,
    });
  }

  render() {
    if (this.state.loading) return (<Loading />);

    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-list" className="movie-list">
        <div data-testid="movie-details" className="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <div className="movie-card-body">
            <h1>{`Title: ${title}`}</h1>
            <p>{`Subtitle: ${subtitle}`}</p>
            <p>{`Storyline: ${storyline}`}</p>
            <p>{`Genre: ${genre}`}</p>
          </div>
          <div className="movie-card-rating" data-testid="rating">
            <span className="rating">{rating}</span>
            <Link to={`/movies/${id}/edit`}>EDITAR</Link>
            <Link to="/">VOLTAR</Link>
          </div>
        </div>
        <button onClick={this.handleClick}>
          <Link to="/">DELETAR</Link>
        </button>
      </div>
    );
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
