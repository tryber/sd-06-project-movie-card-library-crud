import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.fetchAPI = this.fetchAPI.bind(this);

    const { id: movieId } = props.match.params;

    this.state = {
      isLoading: true,
      movieId,
      movie: {},
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const { getMovie } = movieAPI;
    const { movieId } = this.state;

    const data = await getMovie(movieId);

    this.setState(() => (
      {
        movie: data,
        isLoading: false,
      }
    ));
  }

  handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { shouldRedirect, movie, isLoading } = this.state;

    if (shouldRedirect) return <Redirect to="/" />;


    if (isLoading) return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
