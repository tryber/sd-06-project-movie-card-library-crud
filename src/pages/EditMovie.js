import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor() {
    super();
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleApi = this.handleApi.bind(this);
  }

  componentDidMount() {
    this.handleApi();
  }

  async handleApi() {
    this.setState({ status: 'loading' }, async () => {
      const { id } = this.props.match.params;
      const editMovie = await movieAPI.getMovie(id);
      this.setState({
        status: false,
        movie: editMovie,
        shouldRedirect: false,
      });
    });
  }

  handleSubmit(updatedMovie) {
    this.setState({ shouldRedirect: false }, () => {
      movieAPI.updateMovie(updatedMovie);
      this.setState({
        shouldRedirect: true,
      });
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
