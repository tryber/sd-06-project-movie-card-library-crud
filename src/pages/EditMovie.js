import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: true,
      shouldRedirect: false,
      myMovieEdit: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getMyMovie(id);
  }

  async getMyMovie(id) {
    this.setState(
      { load: true },     // primeiro parametro por causa do Loading
      async () => {       // segundo parametro
        const myMovieEdit = await movieAPI.getMovie(id);
        this.setState({
          load: false,
          shouldRedirect: false,
          myMovieEdit,
        });
      });
  }

  handleSubmit(updatedMovie) {
    this.setState(
      { load: true },     // primeiro parametro por causa do Loading
      async () => {       // segundo parametro
        await movieAPI.updateMovie(updatedMovie);
        this.setState({
          load: false,
          shouldRedirect: true,
        });
      });
  }

  render() {
    const { load, shouldRedirect, myMovieEdit } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="edit-movie" >
        {load ? <Loading /> : <MovieForm movie={myMovieEdit} onSubmit={this.handleSubmit} />}
      </div>
    );
  }
}

EditMovie.propTypes = { match: PropTypes.shape.isRequired };

export default EditMovie;
