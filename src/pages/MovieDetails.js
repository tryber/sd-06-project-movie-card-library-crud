import React, { Component } from 'react';
// import * as movieAPI from '../services/movieAPI';
import PropTypes from 'prop-types';
import { getMovie } from '../services/movieAPI';
import { Link } from 'react-router-dom';
import { Loading } from '../components';


class MovieDetails extends Component {

  constructor(props) {
    super()

    this.state = {
      movieID: props.match.params.id,
      movie: {},
      loading: true,
    }

    this.functionNeeded = this.functionNeeded.bind(this);
  }

  async functionNeeded() {
    const detaisReturned = await getMovie(this.state.movieID);
    this.setState({
      movie: detaisReturned,
      loading: false,
    });
  }

  componentDidMount() {
    this.functionNeeded();
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;


    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    if (this.state.loading === true) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${this.state.movieID}/edit`}>EDITAR</Link><br></br>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
