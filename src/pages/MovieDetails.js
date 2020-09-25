import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.fatchMovie = this.fatchMovie.bind(this);
    this.deletMovie = this.deletMovie.bind(this);

    this.state = {
      idMovie: 0,
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fatchMovie();
  }

  async fatchMovie() {
    const { id } = this.props.match.params;
    this.setState({
      movie: await movieAPI.getMovie(id),
      loading: false,
      idMovie: id,
    });
  }

  async deletMovie() {
    const { id } = this.props.match.params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;

    const { loading } = this.state;

    if (loading === true) return <Loading />;

    return (
      <div>
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <div>
            <button><Link to={`/movies/${id}/edit`}>EDITAR</Link></button>
            <button><Link to="/">VOLTAR</Link></button>
            <button onClick={this.deletMovie}><Link to="/">DELETAR</Link></button>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.number.isRequired,
};

export default MovieDetails;
