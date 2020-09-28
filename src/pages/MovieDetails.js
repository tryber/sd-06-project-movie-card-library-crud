import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';


class MovieDetails extends Component {
  constructor() {
    super();
    this.fetchMovieDetails = this.fetchMovieDetails.bind(this);
    this.state = {
      loading: true,
      movie: [],
    };
  }
  componentDidMount() {
    this.fetchMovieDetails();
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

MovieDetails.propTypes = {
  match: PropTypes.number.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.number,
};

export default MovieDetails;
