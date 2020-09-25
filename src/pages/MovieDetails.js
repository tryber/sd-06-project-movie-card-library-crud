import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
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
      <Container>
        <p>Details</p>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <h5><Link to={`/movies/${id}/edit`}>EDITAR</Link></h5>
        <h5><Link to={'/'}>VOLTAR</Link></h5>
        <button onClick={this.handleSubmitDelete}>
          <Link to={'/'}>DELETAR</Link>
        </button>
      </Container>
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
