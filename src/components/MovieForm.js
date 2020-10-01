import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;
    return (
      <label data-testid="text-input-label" htmlFor="movie_title">Título
        <input
          placeholder="Insira o título"
          className="validate form-control"
          id="movie_title"
          type="text"
          name="movie_title"
          value={title}
          onChange={(event) => this.updateMovie('title', event.target.value)}
        />
      </label>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <label data-testid="text-input-label" htmlFor="movie_subtitle">Subtítulo
        <input
          placeholder="Insira o subtítulo"
          id="movie_subtitle"
          type="text"
          value={subtitle}
          onChange={(event) => this.updateMovie('subtitle', event.target.value)}
        />
      </label>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <label data-testid="text-input-label" htmlFor="movie_image">Imagem
        <input
          placeholder="Insira o caminho da imagem"
          className="validate form-control"
          id="movie_image"
          type="text"
          name="movie_image"
          value={imagePath}
          onChange={(event) => this.updateMovie('imagePath', event.target.value)}
        />
      </label>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;
    return (
      <label htmlFor="movie_storyline">
        Sinopse
        <textarea
          placeholder="Informe a sinopse do filme"
          className="validate form-control"
          type="text"
          id="movie_storyline"
          name="movie_storyline"
          value={storyline}
          onChange={(event) => this.updateMovie('storyline', event.target.value)}
        />
      </label>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;

    return (
      <label htmlFor="movie_genre">Gênero
        <select
          id="movie_genre"
          value={genre}
          name="movie_genre"
          className="validate form-control"
          onChange={(event) => this.updateMovie('genre', event.target.value)}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
          <option value="fantasy">Fantasia</option>
        </select>
      </label>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;

    return (
      <label htmlFor="movie_rating">Avaliação
        <input
          placeholder="Dê a avaliação do filme"
          id="movie_rating"
          className="validate form-control"
          type="number"
          step={0.1}
          min={0}
          max={5}
          value={rating}
          onChange={(event) => this.updateMovie('rating', event.target.value)}
        />
      </label>
    );
  }

  renderSubmitButton() {
    return (
      <div className="footer-links">
        <button
          type="button"
          onClick={this.handleSubmit}
          className="footer-button footer-link"
        >Salvar
          </button>
        <Link to={'/'} className="footer-button footer-link">VOLTAR</Link>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form className="form-group">
          <h3 className="form-group-title">Informações do Filme</h3>
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderStorylineInput()}
          {this.renderGenreSelection()}
          {this.renderRatingInput()}
          {this.renderSubmitButton()}
        </form>
      </div>
    );
  }
}

MovieForm.propTypes = {
  movie: PropTypes.shape.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
