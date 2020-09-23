import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import PropTypes from 'prop-types';

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
      this.setState({ loading: false, movie: r }))
    );
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
            <p>{`Subtitle: ${this.state.movie.subtitle}`}</p>
            <p>{`Storyline: ${this.state.movie.storyline}`}</p>
            <p>{`Genre: ${this.state.movie.genre}`}</p>
            <p>{`Rating: ${this.state.movie.rating}`}</p>
          </div>
        }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number
    }),
  }).isRequired,
};

export default MovieDetails;
