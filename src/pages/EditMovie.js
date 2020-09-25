import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import { getMovie, updateMovie } from '../services/movieAPI';

class EditMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const movie = await getMovie(this.props.match.params.id);
    this.setState({
      movie,
      isLoading: false,
    });
  }

  handleSubmit(updatedMovie) {
    updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { isLoading, shouldRedirect, movie } = this.state;

    return (
      <div data-testid="edit-movie">
        {isLoading ? <Loading /> : <MovieForm movie={movie} onSubmit={this.handleSubmit} />}
        {shouldRedirect ? <Redirect to="/" /> : false }
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.objectOf.isRequired,
};

export default EditMovie;
