import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';


class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: {},
      redirect: false,
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
    this.setState({ redirect: true });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { movie, loading, redirect } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    if (loading) return <Loading />;

    if (redirect) return <Redirect push to="/" />;

    return (
      <div data-testid="movie-details">
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
            <Link to={'/'} onClick={this.handleSubmit}>DELETAR</Link>
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
