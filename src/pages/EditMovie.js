import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      isLoading: true,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }
  componentDidMount() {
    this.fetchMovie();
  }

  async handleSubmit(movie) {
    await movieAPI.updateMovie(movie);
    this.setState({shouldRedirect: true});
  }

  async fetchMovie() {
    const { id } = this.props.match.params;
    const filme = await movieAPI.getMovie(id);
    this.setState({
      movie: filme,
      isLoading: false,
    });// atualiza o estado do filme  
    console.log(filme);
  }
  render() {
    const { isLoading, movie, shouldRedirect} = this.state;
    if (shouldRedirect) {
      return <Redirect to={'/'} />
    }
    if (isLoading === true) {
      return (<Loading />)
    }
    
    return (
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
