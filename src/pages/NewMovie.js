import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    const movie = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: '',
    };
    this.state = {
      ...props.movie || movie,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(newMovie) {
    const { createMovie } = movieAPI;
    await createMovie(newMovie);
    this.setState({
      shouldRedirect: true,
    });
    console.log(newMovie);
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

NewMovie.propTypes = {
  movie: propTypes.instanceOf(propTypes.object, propTypes.string).isRequired,
};

export default NewMovie;
