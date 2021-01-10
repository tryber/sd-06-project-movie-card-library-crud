import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor() {
    super();
    this.att = this.att.bind(this);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  async componentDidMount() {
    this.att();
  }

  async att() {
    const { match } = this.props;
    const request = await movieAPI.getMovie(match.params.id);
    this.setState({ movies: request, loading: false });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { movies } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movies;
    const { loading } = this.state;

    return loading ? (
      <Loading />
    ) : (
      <div data-testid="movie-details">
        <div>
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
        </div>
        <Link to={'/'}>VOLTAR</Link>
        <br />
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <br />
        <Link to="/" onClick={() => movieAPI.deleteMovie(id)}>
          DELETAR
        </Link>
      </div>
    );
  }
}

export default MovieDetails;
