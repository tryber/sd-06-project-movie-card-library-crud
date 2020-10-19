import React, { Component } from 'react';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      isloading: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  render() {
    const { shouldRedirect, movie, isLoading } = this.state;
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
export default EditMovie;
