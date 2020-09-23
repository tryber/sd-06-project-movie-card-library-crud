import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

export default class MovieDetails extends Component {
  constructor() {
    super();
    this.updateStateMovie = this.updateStateMovie.bind(this);
    this.state = {
      movie: undefined,
      loading: true,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.updateStateMovie(id);
  }

  updateStateMovie(id) {
    this.setState(
      { loading: true },
      async () => {
        const myMovie = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          movie: myMovie,
        });
      },
    );
  }

  render() {
    const { movie, loading } = this.state;
    let div;
    if (movie) {
      const { storyline, imagePath, genre, rating, subtitle } = movie;
      div =
        (<div data-testid="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>;
        </div>);
    }
    return (
      <div>
        {loading ? <Loading /> : div}
      </div>
    );
  }
}

MovieDetails.propTypes = { match: PropTypes.shape.isRequired };
