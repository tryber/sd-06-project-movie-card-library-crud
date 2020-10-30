import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitMovie: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI
      .createMovie(newMovie)
      .then(() => this.setState({ submitMovie: true }));
  }

  render() {
    const { submitMovie } = this.state;
    if (submitMovie) return <Redirect to="/" />;

    return (
      <div data-testid="new-movie">
        <MovieForm
          movie={{
            id: '',
            title: '',
            subtitle: '',
            storyline: '',
            rating: '',
            imagePath: '',
            bookmarked: '',
            genre: '',
          }}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
export default NewMovie;
