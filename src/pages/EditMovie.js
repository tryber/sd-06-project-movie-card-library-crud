import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      movie: {},
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const movieId = this.props.match.params.id;
    movieAPI.getMovie(movieId).then((response) => this.setState(() => {
      const movie = response;
      return ({ movie, status: '' });
    }));
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then((response) => this.setState(() => {
      const movie = response;
      return ({ movie, status: false, shouldRedirect: true });
    }));
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return (<Redirect to="/" />);
    }

    if (status === 'loading') {
      return (<Loading />);
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;

EditMovie.defaultProps = {
  match: {},
  params: {},
  id: 0,
};

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
