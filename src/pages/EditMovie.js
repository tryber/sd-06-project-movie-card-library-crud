import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      isloading: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.fetchMovie();
  }

  async handleSubmit(movie) {
    await movieAPI.updateMovie(movie);
  }

  async fetchMovie() {
    const {id}= this.props.match.params;
    const filme = await movieAPI.getMovie(id);
    this.setState({
      movie: filme,
      isLoading: false,
    });// atualiza o estado do filme
  }
  render() {
    const { shouldRedirect, movie, isLoading } = this.state.movie;
    if (shouldRedirect) {
       // Redirect
    }
    return isLoading ? <Loading /> :
    (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
EditMovie.propTypes = {
  match: PropTypes.shape.isRequired,
};
export default EditMovie;
