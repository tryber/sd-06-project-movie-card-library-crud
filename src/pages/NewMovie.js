import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(newMovie) {
    await movieAPI.createMovie(newMovie);
    this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state;

    if (redirect) return <Redirect push to="/" />;

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
        <div className="links">
          <Link className="default-link" to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }
}
export default NewMovie;
