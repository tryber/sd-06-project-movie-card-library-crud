import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    }
  }

  handleSubmit(updatedMovie) {
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id)
    .then((response) => this.setState({
      status: 'loaded',
      movie: response,
    }));
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      // <Redirect push to="/" />
    }

    if (status === 'loading') {
      // render Loading
    }

    return (
      <div data-testid="edit-movie">
        {(status === 'loading') ? <Loading /> :
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />}
      </div>
    );
  }
}

export default EditMovie;
