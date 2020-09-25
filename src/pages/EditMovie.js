import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.newState3 = this.newState3.bind(this);
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  componentDidMount() {
    this.newState3();
  }

  async newState3() {
    const { match } = this.props;
    const newState3 = await movieAPI.getMovie(match.params.id);
    this.setState({ movie: newState3 });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (movie.length === 0) return <Loading />;
    if (shouldRedirect) {
      return <Redirect to="/" />
    }

    if (status === 'loading') {
      // render Loading
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
