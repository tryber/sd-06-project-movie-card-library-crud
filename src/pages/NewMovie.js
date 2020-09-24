import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class NewMovie extends Component {
  constructor() {
    super();

    this.state = {
      shouldRedirect: false,
      isLoading: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(newMovie) {
    this.setState({ isLoading: true });

    await movieAPI.createMovie(newMovie);
    this.setState({
      shouldRedirect: true,
      isLoading: false,
    });
  }

  render() {
    const { shouldRedirect, isLoading } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
