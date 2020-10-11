import React, { Component } from 'react';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      isloading: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(updatedMovie) {
  }
  render() {
    const { shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
    }
    return isLoading ? <Loading /> :
    (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
EditMovies.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  movie: PropTypes.objectOf.isRequired,
};
export default EditMovie;
