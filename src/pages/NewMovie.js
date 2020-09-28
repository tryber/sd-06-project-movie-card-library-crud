import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      shouldRedirect: false,
      movie: [],
    };
  }

  async handleSubmit(newMovie) {
    const movie = await movieAPI.createMovie(newMovie);
    this.setState({
      shouldRedirect: true,
      movie,
    });
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) return <Redirect to="/" />
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

NewMovie.propTypes = {
  ShouldRedirect: PropTypes.bool.isRequired,
  movie: PropTypes.object.isRequired,
}

export default NewMovie;
