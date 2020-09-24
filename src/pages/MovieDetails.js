import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {

  constructor() {
    super();

    this.changeSetState = this.changeSetState.bind(this);

    this.state = {
      movieDetailsSelected: '',
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await movieAPI.getMovie(id);
    this.changeSetState(response);
  }

  changeSetState(componentResponse) {
    this.setState({ movieDetailsSelected: componentResponse });
  }

  render() {
    if (this.state.movieDetailsSelected === '') return <Loading />;

    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
      id,
    } = this.state.movieDetailsSelected;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Título: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
