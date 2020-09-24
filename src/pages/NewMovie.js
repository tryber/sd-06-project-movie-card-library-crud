import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      movie:''
    }
  }

  async handleSubmit(newMovie) {
    const movie = await movieAPI.createMovie(newMovie);
    this.setState({ movie })
   
  }

  render() {
    const { movie } = this.state;
    if (movie) {
      return <Redirect to="/" />
    }

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
