import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

export default class MovieDetails extends Component {
  constructor() {
    super();
    this.updateStateMovie = this.updateStateMovie.bind(this);
    this.state = {
      movie: undefined,
      loading: true,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.updateStateMovie(id);
  }

  updateStateMovie(id) {
    this.setState(
      { loading: true },
      async () => {
        const myMovie = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          movie: myMovie,
        });
      },
    );
  }

  render() {
    const { movie, loading } = this.state;
    let div;
    if (movie) {
      const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
      div =
        (<div data-testid="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>;
          <div>
            <Link to="/">VOLTAR</Link><Link to={`/movies/${id}/edit`}>EDITAR</Link>
          </div>
        </div>);
    }
    return (
      <div>
        {loading ? <Loading /> : div}
      </div>
    );
  }
}

MovieDetails.propTypes = { match: PropTypes.shape.isRequired };
