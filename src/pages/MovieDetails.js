import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.fetchMovieDelete = this.fetchMovieDelete.bind(this);

    this.state = {
      loading: true,
      movie: [],
      movies: [],
      id: false,
    }
  }

  async fetchMoviesId() {
    const { id } = this.props.match.params;
    const movie = await movieAPI.getMovie(id);
    this.setState({ 
      loading: false, 
      movie: movie,
      id: id,
    })
  }

  async fetchMovieDelete() {
    const { id } = this.state
    const deletingMovie = await movieAPI.deleteMovie(id)
    this.setState({ 
      movies: deletingMovie,
    })
    return (<Redirect to="/" />)
  }

  componentDidMount() {
    this.fetchMoviesId();
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie
    const { loading } = this.state

    if (loading) {
      return <Loading />
    } else {
      return (
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <button type="button"><Link to="/">VOLTAR</Link></button>
          <button type="button"><Link to={`/movies/${id}/edit`}>EDITAR</Link></button>
          <button type="button" onClick={this.fetchMovieDelete}><Link to="/">DELETAR</Link></button>
        </div>
      );
    }
  }
}

export default MovieDetails;
