import React, { Component } from 'react';
import { Loading } from '../components';
import { MovieForm } from '../components';
import { Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: [],
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.handleSubmit();
  }

  async handleSubmit(updatedMovie) {
    const { match } = this.props;
    const movie = await movieAPI.getMovie(match.params.id);
    this.setState({ updatedMovie, movie });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect - irá navegar para um novo local. O novo local substituirá o local atual.
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      // render Loading
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
          {/* <form>
            <label htmlFor="inputTitulo">
              <input type="text" name="inputTitulo">Título</input>
            </label>
            <label htmlFor="inputSubtitulo">
              <input type="text" name="inputSubtitulo">Subtítulo</input>
            </label>
            <label htmlFor="inputImagem">
              <input type="text" name="inputImagem">Imagem</input>
            </label>
            <label htmlFor="inputSinopse">
              <textarea type="text" name="inputSinopse">Sinopse</textarea>
            </label>
            <label htmlFor="genre">
              <select type="text" name="genre">
                Gênero
                <option value="action">Ação</option>
                <option value="comedy">Comédia</option>
                <option value="thriller">Suspense</option>
                <option value="fantasy">Fantasia</option>
              </select>
            </label>
            <label htmlFor="inputAvaliacao">
              <input type="text" name="inputAvaliacao">Avaliação</input>
            </label>
          </form> */}
      </div>
    );
  }
}

export default EditMovie;
