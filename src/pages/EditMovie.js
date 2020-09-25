import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import { getMovie, updateMovie } from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
    this.state = {
      loading: true,
      movie: {},
      redirect: false,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async handleSubmit(updatedMovie) {
    await updateMovie(updatedMovie);
    this.setState({ redirect: true });
  }

  async fetchMovie() {
    const { match } = this.props;
    const { id } = match.params;
    const movieEdit = await getMovie(id);
    this.setState({
      movie: movieEdit,
      loading: false,
    });
  }

  render() {
    const { loading, movie, redirect } = this.state;
    if (redirect) {
      //  Redirect: https://reactrouter.com/web/api/Redirect
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="edit-movie">
        { loading ? <Loading /> : (
          <div>
            <MovieForm movie={movie} onSubmit={this.handleSubmit} />
          </div>
        )}
      </div>
    );
  }
}

export default EditMovie;
