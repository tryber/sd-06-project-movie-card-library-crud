import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import { getMovie, updateMovie } from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      status: 'loading',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.ApimovieEdit = this.ApimovieEdit.bind(this);
  }
  componentDidMount() {
    this.ApimovieEdit();
  }
  async handleSubmit(updatedMovie) {
    await updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }
  async ApimovieEdit() {
    const { id } = this.props.match.params;
    const cards = await getMovie(id);
    this.setState({
      movie: cards,
      status: '',
    });
  }
  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }
    if (status === 'loading') {
      // render Loading
      return <Loading />;
    }
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
export default EditMovie;
