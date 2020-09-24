import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.fetchMovie = this.fetchMovie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { id } = this.props.match.params;

    this.setState({
      loading: true,
    });

    const movie = await movieAPI.getMovie(id);

    this.setState({
      loading: false,
      movie,
    });
  }

  async handleSubmit(updatedMovie) {
    const updateMovie = await movieAPI.updateMovie(updatedMovie);
    if (updateMovie === 'OK') {
      this.setState({
        shouldRedirect: true,
      });
    }
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return (<Redirect to="/" />);
    }
    return loading ? <Loading /> : (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.number }) }),
}.isRequired;

export default EditMovie;
