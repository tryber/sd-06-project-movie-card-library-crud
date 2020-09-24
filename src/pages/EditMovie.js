import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';


class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      movie: undefined,
      status: false,
      shouldRedirect: false,
    };
  }

  async componentDidMount() {
    this.setState(
      { status: true },
      async () => {
        const { id } = this.props.match.params;
        const movie = await movieAPI.getMovie(id);

        this.setState({
          movie: movie,
          status: false,
          shouldRedirect: false,
        });
      });

  }

  handleSubmit(updatedMovie) {
    this.setState(
      { shouldRedirect: false },
      () => {
        movieAPI.updateMovie(updatedMovie);
        this.setState({
          shouldRedirect: true,
        });
      });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="" />;
    }

    if (status) {
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
  match: PropTypes.shape({
    id: propTypes.number,
  }).isRequired,
};

export default EditMovie;
