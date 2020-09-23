import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const id = this.props.match.params.id;
    const movie = await movieAPI.getMovie(id);
    this.setState({ movie, loading: false });
  }

  render() {
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const { loading } = this.state;
    return (
      <div>
        {(loading) ? <Loading />
          : <div>
            <div data-testid="movie-details">
              <img alt="Movie Cover" src={`../${imagePath}`} />
              <p>{`Title: ${title}`}</p>
              <p>{`Subtitle: ${subtitle}`}</p>
              <p>{`Storyline: ${storyline}`}</p>
              <p>{`Genre: ${genre}`}</p>
              <p>{`Rating: ${rating}`}</p>
            </div>
            <div>
              <Link to={`/movies/${id}/edit`}>EDITAR</Link>
              <Link to="/">VOLTAR</Link>
            </div>
          </div>
        }
      </div>
    );
  }
}

MovieDetails.propTypes = { match: PropTypes.string.isRequired };

export default MovieDetails;
