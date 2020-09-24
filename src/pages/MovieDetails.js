import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import './MovieDetails.css';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  handleClick() {
    const id = this.props.match.params.id;
    movieAPI.deleteMovie(id);
  }

  async fetchMovie() {
    const id = this.props.match.params.id;
    const movie = await movieAPI.getMovie(id);
    this.setState({ movie });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;

    if (this.state.movie.length === 0) {
      return (<Loading />);
    }

    return (
      <div data-testid="movie-details" className="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p><span className="bold">Title:</span> {`${title}`}</p>
        <p><span className="bold">Subtitle: </span>{`${subtitle}`}</p>
        <p><span className="bold">Storyline: </span>{`${storyline}`}</p>
        <p><span className="bold">Genre: </span>{`${genre}`}</p>
        <p><span className="bold">Rating: </span>{`${rating}`}</p>
        <div className="buttons">
          <button><Link to={`/movies/${id}/edit`}>EDITAR</Link></button>
          <button><Link to="/">VOLTAR</Link></button>
        </div><br /><br />
        <Link to="/" onClick={this.handleClick}>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired,
  }).isRequired,
};

export default MovieDetails;
