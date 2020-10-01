import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { MovieForm, Loading } from '../components';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: undefined,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getMovieFunction();
  }

  async getMovieFunction() {
    const id = this.props.match.params.id;
    const fetchData = await movieAPI.getMovie(id);
    this.setState({ movie: fetchData });
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { shouldRedirect, movie } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;

    if (!movie) return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
