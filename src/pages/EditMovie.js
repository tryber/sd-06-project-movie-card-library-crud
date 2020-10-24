import React, { Component } from 'react';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';
import PropTypes from 'prop-types';
class EditMovie extends Component {
  constructor(props) {
  super(props);
    this.state = {
      movie: [],
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
  const id = this.props.match.params.id;
  const filme = await movieAPI.getMovie(id);
  this.setState({
    movie: filme,
    isLoading: false
  });// atualiza o estado do filme
}
  render() {
    const { shouldRedirect, movie, isLoading } = this.state;
    if (shouldRedirect) {
       // Redirect
    }
    return isLoading ? <Loading /> :
    (
      <div data-testid="edit-movie">
        {console.log(movie)}
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
EditMovie.propTypes = {
  match: PropTypes.shape.isRequired
};
export default EditMovie;
