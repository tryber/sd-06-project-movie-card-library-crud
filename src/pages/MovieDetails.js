import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import movies from '../services/movieData';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.fetchDetails = this.fetchDetails.bind(this);

    this.state = {
      movie: undefined,
      loading: true,
    }
  }

  async fetchDetails() {
    const details = await movieAPI.getMovie(this.props.match.params.id);
    this.setState({
      movie: details,
      loading: false,
    })
  }

  componentDidMount() {
    this.fetchDetails();
  }

  render() {
    // Change the condition to check the state
    if (this.state.loading === true) return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h3>{`Title: ${title}`}</h3>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to='/'>VOLTAR</Link><br /><br />
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
