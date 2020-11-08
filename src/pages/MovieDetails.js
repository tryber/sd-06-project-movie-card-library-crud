import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.getMyMovie = this.getMyMovie.bind(this);
    this.showDetails = this.showDetails.bind(this);
    this.handleSubmitDelete = this.handleSubmitDelete.bind(this);

    this.state = {
      myMovie: undefined,
      load: true,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getMyMovie(id);
  }

  async getMyMovie(id) {
    this.setState(
      { load: true },     // primeiro parametro por causa do Loading
      async () => {       // segundo parametro
        const myMovie = await movieAPI.getMovie(id);
        this.setState({
          load: false,
          myMovie,
        });
      });
  }

  async handleSubmitDelete() {
    const { id } = this.state.myMovie;
    await movieAPI.deleteMovie(id);
  }

  showDetails() {
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.myMovie;
    return (
      <div className="movie-datails">
        <img alt="Movie Cover" src={`../${imagePath}`} className="movie-card-image" />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{`Title: ${title}`}</h4>
          <h5 className="movie-card-subtitle">{`Subtitle: ${subtitle}`}</h5>
          <p className="movie-card-storyline">{`Storyline: ${storyline}`}</p>
          <h5 className="movie-card-subtitle">{`Genre: ${genre}`}</h5>
          <h5 className="movie-card-subtitle">{`Rating: ${rating}`}</h5>
          <div className="footer-links">
            <Link to={`/movies/${id}/edit`} className="footer-button footer-link">EDITAR</Link>
            <button onClick={this.handleSubmitDelete} className="footer-button">
              <Link to={'/'} className="footer-link">DELETAR</Link>
            </button>
            <Link to={'/'} className="footer-button footer-link">VOLTAR</Link>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { load } = this.state;
    return (
      <div data-testid="movie-details">
        {load ? <Loading /> : this.showDetails()}
      </div>
    );
  }
}

MovieDetails.propTypes = { match: PropTypes.shape.isRequired };

export default MovieDetails;
