import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      isLoading: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isLoadingStateFunc = this.isLoadingStateFunc.bind(this);
  }

  componentDidMount() {
    this.isLoadingStateFunc();
  }

  async isLoadingStateFunc() {
    this.setState({
      isLoading: true,
    }, async () => {
      const { id } = this.props.match.params;
      const requestMovie = await movieAPI.getMovie(id);

      this.setState({
        movie: requestMovie,
        isLoading: false,
      });
    });
  }

  async handleSubmit(updatedMovie) {
    this.setState ({
      isLoading: true,
    }, async () => {
      await movieAPI.updateMovie(updatedMovie);
      this.setState({
        isLoading: false,
      });
    },);
  }

  render() {
    const { movie, isLoading } = this.state;
    
    return (
      <div data-testid="edit-movie">
        { isLoading ? <Loading /> : <MovieForm movie={movie} onSubmit={this.handleSubmit} />}
      </div>
    );
  }
}

export default EditMovie;
