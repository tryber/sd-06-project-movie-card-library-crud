import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movie: undefined,
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
          <div>
            <img alt="Movie Cover" src={`../${this.state.movie.imagePath}`} />
            <p>{`Title: ${this.state.movie.title}`}</p>
            <p>{`Subtitle: ${this.state.movie.subtitle}`}</p>
            <p>{`Storyline: ${this.state.movie.storyline}`}</p>
            <p>{`Genre: ${this.state.movie.genre}`}</p>
            <p>{`Rating: ${this.state.movie.rating}`}</p>
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
