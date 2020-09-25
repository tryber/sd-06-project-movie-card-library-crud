import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {

  constructor() {
    super();
    this.state = {
      movie: {},
      loader: true,
      id: undefined,
    };
  }

/*  componentDidMount(){
const { id } = this.props.match.params;
movieAPI.getMovie(id)
.then((r) => this.setState({movie: r, loader: false}))
console.log(this.state) // continua undefined
}*/

  async componentDidMount() {
    const { getMovie } = movieAPI;
    const { id } = this.props.match.params;
    const movie = await getMovie(id);
    this.setNewState(movie, id);
    console.log(id);
  }

  setNewState(newState, id) {
    this.setState({
      movie: newState,
      loader: false,
      id,
    });
  }

  render() {
    const { movie, loader, id } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (loader) return <Loading />;

    return (
      <div data-testid="movie-details">
        <h1>{`Title: ${title}`}</h1>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <p><Link to={`/movies/${id}/edit`}>EDITAR</Link></p>
        <p><Link to={'/'}>VOLTAR</Link></p>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
