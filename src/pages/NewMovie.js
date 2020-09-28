import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      redirection: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(newMovie) {
    await movieAPI.createMovie(newMovie);
    this.setState({ redirection: true });
  }

  render() {
    const { redirection } = this.state;
    if (redirection === true) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="new-movie">
        <MovieForm props={this.props}onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
