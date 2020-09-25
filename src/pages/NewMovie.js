import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import { createMovie } from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state= {
      redirect: false,
    };
  }

  async handleSubmit(newMovie) {
    await createMovie(newMovie);
    this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state;
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
        { redirect ? <Redirect to='/' /> : ''}
      </div>
    );
  }
}
export default NewMovie;
