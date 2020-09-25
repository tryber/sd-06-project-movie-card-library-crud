import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Link } from 'react-router-dom';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = { movie: [] };
  }

  componentDidMount() {
    this.getMovieData();
  }

  async getMovieData() {
    const id = this.props.match.params.id;
    const fetchData = await movieAPI.getMovie(id);
    this.setState({ movie: fetchData });
  }

  render() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    // Change the condition to check the state
    // if (true) return <Loading />;
    while (movie.length === 0) {
      return <Loading />;
    }


    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div>
          <button><Link to={`/movies/${id}/edit`} >EDITAR</Link></button>
          <button><Link to="/">VOLTAR</Link></button>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
