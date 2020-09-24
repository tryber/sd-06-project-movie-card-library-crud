import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.movieFetch = this.movieFetch.bind(this);

    this.state = {
      loading: false,
      movie: {},
    };
  }

  componentDidMount() {
    this.movieFetch();
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
    // Change the condition to check the state
    // if (true) return <Loading />;

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
          </section>
        </div>
        }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
