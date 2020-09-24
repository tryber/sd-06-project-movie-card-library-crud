import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      status: 'loading',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.movieById();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);

    this.setState({ shouldRedirect: true });
  }

  async movieById() {
    this.setState(
      { status: 'loading' },
      async () => {
        const { id } = this.props.match.params;
        const movieObj = await movieAPI.getMovie(id);

        this.setState({
          movie: movieObj,
          status: 'ready',
        });
      },
    );
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
