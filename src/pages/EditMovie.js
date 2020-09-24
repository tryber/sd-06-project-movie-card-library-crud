import React, { Component } from 'react';
import Link from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super();
    this.state = { 
      isLoading: true,
      shouldRedirect: false,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchNewMovie();
  }

  async fetchNewMovie() {
    const movie = await movieAPI.updateMovie();
    this.setState({
      movie,
      isLoading: false
    });
  }

  handleSubmit(updatedMovie) {
    const { movie } = this.state;
    const { id } = movie;
    return (
      <div>
        <button type="submit" onClick={this.fetchNewMovie}><Link to={`/movies/${id}/edit`} >Submit</Link>t</button>
      </div>
    )
  }

  render() {
    const { isLoading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
    }
    return (
      <div data-testid="edit-movie">
        {(isLoading) ? <Loading /> : false}
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
