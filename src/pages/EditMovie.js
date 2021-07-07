import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { MovieForm, Loading } from '../components';
import { getMovie, updateMovie } from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: false,
      shouldRedirect: false,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.requisitionAndLoading = this.requisitionAndLoading.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.requisitionAndLoading(id);
  }

  async requisitionAndLoading(id) {
    this.setState(
      { loading: true },
      async () => {
        const movie = await getMovie(id);
        this.setState({
          movie,
          loading: false,
        });
      },
    );
  }

  async handleSubmit(movieUpdate) {
    await updateMovie(movieUpdate);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { shouldRedirect, loading, movie } = this.state;
    if (loading) {
      return <Loading />;
    }

    if (shouldRedirect) {
      return <Redirect to="/" />;
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
    params: PropTypes.shape({
      id: PropTypes.number.isRequired }).isRequired,
  }).isRequired,
};

export default EditMovie;
