import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const movieId = this.props.match.params.id;
    const result = await movieAPI.getMovie(movieId);
    this.setState({
      movie: result,
      isLoading: false,
    })
  }
  render() {
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const { isLoading } = this.state;
    return (
      <div>
        { isLoading === true ? <Loading /> :
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
            <Link to="/" >VOLTAR</Link> <br/>
            <Link to="/" >DELETAR</Link>
            <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          </div>
        </div>
      }
      </div>
    );
  }
}

MovieDetails.propTypes = { match: PropTypes.objectOf(Array).isRequired };
export default MovieDetails;
