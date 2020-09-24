import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.movieFetch = this.movieFetch.bind(this);
    this.movieDelete = this.movieDelete.bind(this);

    this.state = {
      loading: false,
      movie: {},
    };
  }

  componentDidMount() {
    this.movieFetch();
  }

  async movieDelete() {
    const { id } = this.props.match.params;
    await movieAPI.deleteMovie(id);
  }

  async movieFetch() {
    const { id } = this.props.match.params;
    this.setState(
      { loading: true },
      async () => {
        const response = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          movie: response,
        });
      },
    );
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;

    return (
      <div data-testid="movie-details">
        {(this.state.loading) ? <Loading /> :
        <div>
          <section>
            <img alt="Movie Cover" src={`../${imagePath}`} />
            <h2>{`Title: ${title}`}</h2>
            <p>{`Subtitle: ${subtitle}`}</p>
            <p>{`Storyline: ${storyline}`}</p>
            <p>{`Genre: ${genre}`}</p>
            <p>{`Rating: ${rating}`}</p>
          </section>
          <section>
            <Link to={`${id}/edit`}>EDITAR</Link>
            <Link to={'/'}>VOLTAR</Link>
            <button type="button" onClick={this.movieDelete}><Link to="/">DELETAR</Link></button>
          </section>
        </div>
        }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: {
      id: PropTypes.string,
    },
  }).isRequired,
};

export default MovieDetails;
