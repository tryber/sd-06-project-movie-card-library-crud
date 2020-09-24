import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderMovieDetails = this.renderMovieDetails.bind(this);

    this.state = {
      loading: true,
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    this.renderMovieDetails();
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async renderMovieDetails() {
    const { id } = this.props.match.params;
    const response = await movieAPI.getMovie(id);
    this.setState({
      movie: response,
      loading: false,
    });
  }

  render() {
    const { shouldRedirect, movie, loading } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="edit-movie">
        {loading ? <Loading /> :
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />}
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
};

EditMovie.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: 3,
    }),
  }),
};

export default EditMovie;
