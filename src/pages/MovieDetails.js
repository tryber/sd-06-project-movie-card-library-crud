import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';



class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const id = this.props.match.params.id;
    const filmes = await movieAPI.getMovie(id);
    this.setState({
      movies: filmes,
      loading: false,
    });
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movies;
    const { loading } = this.state;

    return (
      <div>
        {(loading) ? <Loading /> :
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <div>
            <Link to={'/'}>VOLTAR</Link>
          </div>
          <div>
            <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          </div>
        </div>
        }
      </div>
    );
  }
}

MovieDetails.propTypes = { match: propTypes.objectOf(Array).isRequired };

export default MovieDetails;
