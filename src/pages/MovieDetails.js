import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      loading: true,
    };
    this.fetchList = this.fetchList.bind(this);
  }

  componentDidMount() {
    this.fetchList();
  }

  async fetchList() {
    const movieId = this.props.match.params.id;
    const idMovie = await movieAPI.getMovie(movieId);
    this.setState({
      movie: idMovie,
      loading: false,
    });
  }

  render() {
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const { loading } = this.state;
    return (
      <div>
        {loading === true ? <Loading /> :
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <h4>{`title: ${title}`}</h4>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <div>
            <Link to="/">VOLTAR</Link>
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
// Vi o Ícaro fazendo PropTypes assim em um plantão, não sei se está correto

MovieDetails.propTypes = { match: propTypes.shape({
  params: propTypes.shape({
    id: propTypes.string,
  }),
}) }.isRequired;

export default MovieDetails;
