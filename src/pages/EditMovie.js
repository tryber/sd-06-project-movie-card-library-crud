import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Loading, MovieCard, MovieForm } from '../components';
import propTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      shouldRedirect: false,
      status: 'loading',
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.state;
    movieAPI.getMovie(id).then((result) => {
      this.setState({
        status: null,
        movie: result,
      });
    });
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);

    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: propTypes.objectOf(propTypes.any).isRequired,
};

export default EditMovie;
