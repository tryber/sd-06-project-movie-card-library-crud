import React, { Component } from 'react';

import { MovieForm, Loading } from '../components';
import { getMovie, updateMovie } from '../services/movieAPI';
import { Redirect } from 'react-router-dom';

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
    this.requisitionAndLoading();
  }

  async requisitionAndLoading() {
    this.setState(
      { loading: true },
      async () => {
        const { id } = this.props.match.params;
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

export default EditMovie;
