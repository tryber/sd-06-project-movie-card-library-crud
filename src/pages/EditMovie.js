import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading } from '../components';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
      id: this.props.match.params.id,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchAPIMovie();
  }
  
  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async fetchAPIMovie() {
    const apiMovie = await movieAPI.getMovie(this.state.id);
    this.setState({
      movie: apiMovie,
      loading: false,
    });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;

    if (loading === true) {
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

EditMovie.propTypes = { match: PropTypes.objectOf(Array).isRequired };
export default EditMovie;
