import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      loading: true,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findMyMovie = this.findMyMovie.bind(this);
    console.log('No Constructor', this.props);
  }

  componentDidMount() {
    this.findMyMovie();
  }

  async handleSubmit(updatedMovie) {
    const editedMovie = await movieAPI.updateMovie(updatedMovie);
    this.setState({
      movie: editedMovie,
      shouldRedirect: true,
    });
    console.log('No HandleSubmit', editedMovie);
  }

  async findMyMovie() {
    this.setState(
      { loading: true },
      async () => {
        const originalMovie = await movieAPI.getMovie(this.props.match.params.id);
        this.setState({ loading: false, movie: originalMovie });
        console.log('No  findMyMovie/Did Mount:', originalMovie);
      },
    );
  }

  render() {
    const { status, shouldRedirect, movie, loading } = this.state;
    const loadingElement = <span>Carregando...</span>;
    console.log('no render:', movie);

    // no plantão Ícaro disse para lermos a documentação:
    // https://reactrouter.com/web/api/Redirect
    // além disso pesquisei
    // e encontrei essa resposta no StackOverflow:
    // https://stackoverflow.com/questions/45089386/what-is-the-best-way-to-redirect-a-page-using-react-router
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      // render Loading
    }

    return (
      <div data-testid="edit-movie">
        {loading ? loadingElement : <MovieForm movie={movie} onSubmit={this.handleSubmit} />};
      </div>
    );
  }
}

export default EditMovie;
