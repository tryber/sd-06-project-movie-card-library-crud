import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { getMovie, deleteMovie } from '../services/movieAPI';

class MovieDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      isLoading: true,
    };
    this.fetchMovie = this.fetchMovie.bind(this);
    this.deleteTheMovie = this.deleteTheMovie.bind(this);
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

  deleteTheMovie() {
    deleteMovie(this.props.match.params.id);
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;

    return (
      <div data-testid="movie-details">
        {this.state.isLoading ? <Loading /> : <div>
          <img alt="Movie Cover" src={`../${imagePath}`} className="detailImg" />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <Link to={`/movies/${id}/edit`} className="linkDown">EDITAR</Link>
          <Link to="/" className="linkDown">VOLTAR</Link>
          <Link to="/" className="linkDown" onClick={this.deleteTheMovie}>DELETAR</Link>
        </div>}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf.isRequired,
};

export default MovieDetails;
