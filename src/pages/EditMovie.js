import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.fetchEditMovie = this.fetchEditMovie.bind(this);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // requisição do filme de acordo com o id fornecido na URL
  // atualiza o estado com o filme equivalente ao id fornecido e o status
  async fetchEditMovie() {
    const { id } = this.props.match.params;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      status: 'not-loading',
      movie,
    })
  }
   componentDidMount() {
     this.fetchEditMovie();
   }

  async handleSubmit(updatedMovie) {
    const movie = await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
      movie,
    });
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

EditMovie.propType = {
  status: PropTypes.string.isRequired,
  shouldRedirect: PropTypes.bool.isRequired,
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default EditMovie;
