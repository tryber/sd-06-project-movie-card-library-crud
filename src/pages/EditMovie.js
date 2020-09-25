import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      loading: true,
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id)
    .then((movie) => this.setState({ movie, loading: false }));
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie)
    .then(() => this.setState({ loading: false, redirect: true }));
  }

  render() {
    const { loading, movie, redirect } = this.state;
    if (loading) return <Loading />;
    if (redirect) return <Redirect to="/" />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

export default EditMovie;
