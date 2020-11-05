import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import './MovieDetails.css';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movie: [],
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id).then((r) => (
      this.setState({
        loading: false,
        movie: r,
      })
    ));
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    return (
      <div data-testid="movie-details">
        {
          this.state.loading ? <Loading /> :
          <div className="movie-detail-container">
            <img alt="Movie Cover" src={`../${this.state.movie.imagePath}`} />
            <p><b>Title:</b> {this.state.movie.title}</p>
            <p><b>Subtitle:</b> {this.state.movie.subtitle}</p>
            <p><b>Storyline:</b> {this.state.movie.storyline}</p>
            <p><b>Genre:</b> {this.state.movie.genre}</p>
            <p><b>Rating:</b> {this.state.movie.rating}</p>
            <div>
              <button>
                <Link to={`/movies/${this.state.movie.id}/edit`}>
                  EDITAR
                </Link>
              </button>
              <button>
                <Link to="/">VOLTAR</Link>
              </button>
            </div>
          </div>
        }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
