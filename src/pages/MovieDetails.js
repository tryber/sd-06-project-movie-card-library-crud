import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
    }
  }
  componentDidMount() {
    this.newState2();
  }

  async newState2() {
    const newState2 = await movieAPI.getMovie(this.props.match.params.id);
    this.setState({
      movie: newState2,
    });
  }
  render() {
    const { movie } = this.state;
    if (movie.length === 0) return <Loading />;
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div>
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
        </div>
        <div>
          <Link to={`/movies/${id}/edit`} >EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
