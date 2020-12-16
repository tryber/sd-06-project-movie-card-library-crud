import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: [],
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    this.setState(
      { status: 'loading' },
      async () => {
        const { id } = this.props.match.params;
        const movieObject = await movieAPI.getMovie(id);
        this.setState({
          status: 'loaded',
          movie: movieObject,
        });
      },
    );
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;
    if (status === 'loading') return <Loading />;
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
