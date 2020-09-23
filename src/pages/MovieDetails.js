import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: false,
    };
  }

  componentDidMount() { 
    const { id } = this.props.match.params;
    this.setState( { loading: true },
      async () => {
        this.setState({ movie: await movieAPI.getMovie(id), loading: false });
      }
    );
  }

  render() {
    const { loading } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    
    if (loading) {
      return <Loading />
    }

    return (
      <div data-testid="movie-details">
        <h4>{title}</h4>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div className="actions">
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
