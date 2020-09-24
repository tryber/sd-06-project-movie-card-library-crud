import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import EditMovie from './EditMovie';

class MovieDetails extends Component {
  constructor() {
    super();

    this.fetchMovie = this.fetchMovie.bind(this);

    this.state = {
      movie: {},
      isLoading: true,
    };
  }

  async fetchMovie() {
    const { id } = this.props.match.params;
    const movie = await movieAPI.getMovie(id);
    this.setState(() => ({
      movie: movie,
      isLoading: false,
    }));
  }

  componentDidMount() {
    this.fetchMovie();
  }

  render() {
    const { isLoading, movie } = this.state;
    const { title, storyline, imagePath, genre, subtitle } = movie;
    const { id } = this.props.match.params;

    return (
      (isLoading === true)
      ? <Loading />
      : (<div data-testid="movie-details"> 
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <Link to={`/movies/${id}/edit`} render={(props) => <EditMovie {...props} />}>EDITAR</Link>
          <Link to='/'>VOLTAR</Link>
        </div>)
    );
  }
}

export default MovieDetails;
