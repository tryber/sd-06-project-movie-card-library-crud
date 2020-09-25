import React, { Component } from 'react';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fatchMovie = this.fatchMovie.bind(this);
  }

  handleSubmit(newMovie) {
    this.setState({
      movie: newMovie,
    })
  }

  componentDidMount() {
    this.fatchMovie();
  }

  async fatchMovie() {
    const { id } = this.props.match.params;
    this.setState({
      movie: await movieAPI.createMovie(id),
    });
  }

  render() {
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
