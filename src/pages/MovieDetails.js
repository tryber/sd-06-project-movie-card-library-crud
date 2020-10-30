import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';


class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id)
    .then((response) => this.setState({
      loading: false,
      movie: response,
    }));
  }

  async handleSubmit() {
    const { id } = this.props.match.params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    let srcImg = '';

    if (loading) return <Loading />;

    if (imagePath.substring(0, 7) === 'images/') {
      srcImg = `../${imagePath}`;
    } else {
      srcImg = imagePath;
    }

    return (
      <div data-testid="movie-details" className="movie-details-body">
        <div>
          <section className="movie-details">
            <img alt="Movie Cover" src={srcImg} className="movie-card-image" />
            <div className="movie-card-body">
              <div className="title-details">
                <h2 className="movie-card-title">{`Title: ${title}`}</h2>
              </div>
              <p className="movie-card-subtitle">{`Subtitle: ${subtitle}`}</p>
              <p className="movie-card-storyline">{`Storyline: ${storyline}`}</p>
              <p>{`Genre: ${genre}`}</p>
            </div>
            <div className="movie-card-rating">
              <p className="rating">{`Rating: ${rating}`}</p>
            </div>
          </section>
          <section className="links">
            <Link className="default-link" to={`${id}/edit`}>EDITAR</Link>
            <Link className="default-link" to={'/'}>VOLTAR</Link>
            <Link className="default-link" to={'/'} onClick={this.handleSubmit}>DELETAR</Link>
          </section>
        </div>
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
