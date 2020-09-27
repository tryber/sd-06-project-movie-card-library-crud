import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieDetails extends Component {
  constructor() {
    super();
    this.fetchMovieDetails = this.fetchMovieDetails.bind(this);
    this.state = {
      loading: true,
      movie: [],
    };
  }

  async fetchMovieDetails() {
   // importar o id  de MovieCard
  const { id } = this.props.match.params;
    const resquestObject = await movieAPI.getMovie(id);
    this.setState({
      loading: false,
      movie: resquestObject,
    });
  }
  componentDidMount() {
    this.fetchMovieDetails();
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading, movie } = this.state;
    const { storyline, imagePath, genre, rating, subtitle, title, id } = movie;
    if (loading) return <Loading />;
    return (
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
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        </div>
        <div>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propType = {
  loading: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieDetails;
