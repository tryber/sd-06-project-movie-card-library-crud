import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.renderizar1 = this.renderizar1.bind(this);
    this.requisitionAndLoading = this.requisitionAndLoading.bind(this);
    this.state = {
      movie: {},
      loading: false,
    };
  }

  componentDidMount() {
    this.requisitionAndLoading();
  }

  requisitionAndLoading() {
    this.setState(
      { loading: true },
      async () => {
        const { id } = this.props.match.params;
        const movie = await getMovie(id);
        this.setState({
          movie,
          loading: false,
        });
      },
    );
  }

  renderizar1() {
    const { movie, loading } = this.state;
    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
      id,
    } = movie;
    if (loading) {
      return <Loading />;
    }
    return (
      <div>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{title}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }

  render() {
    return (<div data-testid="movie-details">{this.renderizar1()}</div>);
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
