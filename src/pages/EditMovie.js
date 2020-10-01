import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: undefined,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    const fetchData = await movieAPI.getMovie(id);
    this.setState({ movie: fetchData });
<<<<<<< HEAD
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { shouldRedirect, movie } = this.state;
=======
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
>>>>>>> 4325728f08a3e00a65ef9f45e2dde0df07ecd1e7
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
