import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import { Loading } from '../components';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(updatedMovie) {
  }

  componentDidMount() {
    return this.fetchAPIMovie();
  }
  async fetchAPIMovie() {
    const apiMovie = await movieAPI.getMovie(this.props.match.params.id);
    this.setState({
      movie: apiMovie,
      loading: false,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (this.state.loading === true) {
      return <Loading />
    }

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
