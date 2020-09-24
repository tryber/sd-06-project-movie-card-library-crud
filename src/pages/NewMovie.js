import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Loading } from '../components';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderForm = this.renderForm.bind(this);

    this.state = {
      loading: true,
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    this.renderForm();
  }

  async handleSubmit(newMovie) {
    await movieAPI.createMovie(newMovie);
    this.setState({ shouldRedirect: true });
  }

  renderForm() {
    this.setState({ loading: false });
  }

  render() {
    const { loading, shouldRedirect } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="new-movie">
        {loading ? <Loading /> : <MovieForm onSubmit={this.handleSubmit} />}
      </div>
    );
  }
}
export default NewMovie;
