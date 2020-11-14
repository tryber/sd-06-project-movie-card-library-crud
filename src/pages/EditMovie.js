import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { MovieForm } from '../components';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: true,
      shouldRedirect: false,
      editedMovie: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.requestEditMovie(id);
  }

  async requestEditMovie(id) {
    this.setState(
      { load: true },
      async () => {
        const editedMovie = await movieAPI.getMovie(id);
        this.setState({
          load: false,
          shouldRedirect: false,
          editedMovie,
        });
      });
  }

  handleSubmit(updatedMovie) {
    this.setState(
      { load: true },
      async () => {
        await movieAPI.updateMovie(updatedMovie);
        this.setState({
          load: false,
          shouldRedirect: true,
        });
      },
    );
  }

  render() {
    const { load, shouldRedirect, editedMovie } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="edit-movie">
        {load ? <Loading /> : <MovieForm movie={editedMovie} onSubmit={this.handleSubmit} />}
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape.isRequired,
};

export default EditMovie;
