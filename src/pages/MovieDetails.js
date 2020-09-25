import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';


class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movie: [],
    };

    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    this.updateState();
  }

  async updateState() {
    const id = this.props.match.params.id;
    const response = await movieAPI.getMovie(id);

    this.setState({
      loading: false,
      movie: response,
    });
  }

  render() {
    const { loading } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div>
        { loading ? <Loading /> :
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <div>
            <Link to={`${id}/edit`}>EDITAR</Link>
            <Link to="/">VOLTAR</Link>
          </div>
        </div>
        }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;

export default MovieDetails;
