import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { getMovie } from '../services/movieAPI';

class MovieDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      isLoading: true,
    };
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const numberId = this.props.match.params.id;
    const movie = await getMovie(numberId);
    this.setState({
      movie,
      isLoading: false,
    });
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;

    return (
      <div data-testid="movie-details">
        {this.state.isLoading ? <Loading /> : <div>
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf.isRequired,
};

export default MovieDetails;
