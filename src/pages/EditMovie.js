import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MovieForm } from '../components';
import { getMovie, updateMovie } from '../services/movieAPI';
// import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      status: "loading",
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.functionNeeded = this.functionNeeded.bind(this);
    // this.shouldRedirect = this.shouldRedirect.bind(this);
  }

  async functionNeeded() {
    const movieDownLoaded = await getMovie(this.props.match.params.id);
    this.setState({
      movie: movieDownLoaded,
      status: "not-loading",
    });
  }

  componentDidMount() {
    this.functionNeeded();
  }


  async handleSubmit(updatedMovie) {
    await updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to='/' />
    }

    if (status === 'loading') {
      return <Loading />
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: {
    params: {
      id: PropTypes.number.isRequired,
    },
  }.isRequired,
};

export default EditMovie;
