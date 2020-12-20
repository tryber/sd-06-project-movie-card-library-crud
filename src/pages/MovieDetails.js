import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.newState2 = this.newState2.bind(this);

    this.state = {
      movie: [],
    };
  }

  componentDidMount() {
    this.newState2();
  }

  async newState2() {
    const { match } = this.props;
    const newState2 = await movieAPI.getMovie(match.params.id);
    this.setState({ movie: newState2 });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (movie.length === 0) return <Loading />;
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
          <Link to={'/'} >VOLTAR</Link>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
