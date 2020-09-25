import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';

import MovieForm from '../components/MovieForm';
import { createMovie } from '../services/movieAPI';


class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(newMovie) {
    await createMovie(newMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { shouldRedirect } = this.state;

    if (shouldRedirect) {
      return (
        <Redirect to="/" />
      );
    }

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

// NewMovie.propTypes =
// { match: PropTypes.objectOf(PropTypes.oneOfType(
//   [PropTypes.bool, PropTypes.object, PropTypes.string],
//   )).isRequired,
// };

export default NewMovie;
