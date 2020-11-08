import React from 'react';
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
      <div>
        <br />
        <input
          placeholder="Insira o título"
          id="movie_title"
          type="text"
          className="validate"
          value={title}
          onChange={(event) => this.updateMovie('title', event.target.value)}
        />
        <label htmlFor="movie_title">Título</label><br />
      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;
    return (
      <div><br />
        <input
          placeholder="Insira o subtítulo"
          id="movie_subtitle"
          type="text"
          value={subtitle}
          onChange={(event) => this.updateMovie('subtitle', event.target.value)}
        />
        <label htmlFor="movie_subtitle">Subtítulo</label><br />
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;
    return (
      <div className="row"><br />
        <input
          placeholder="Insira o caminho da imagem"
          id="movie_image"
          type="text"
          value={imagePath}
          onChange={(event) => this.updateMovie('imagePath', event.target.value)}
        />
        <label htmlFor="movie_image">Imagem</label><br />
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;
    return (
      <div>
        <textarea
          id="movie_storyline"
          value={storyline}
          onChange={(event) => this.updateMovie('storyline', event.target.value)}
        />
        <label htmlFor="movie_storyline">Sinopse</label><br />
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;
    return (
      <div><br />
        <label htmlFor="movie_genre">Gênero</label>
        <select
          id="movie_genre"
          value={genre}
          onChange={(event) => this.updateMovie('genre', event.target.value)}
        ><br />
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
          <option value="fantasy">Fantasia</option>
        </select>
      </div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <div><br />
        <input
          placeholder="Dê a avaliação do filme"
          id="movie_rating"
          type="number"
          step={0.1}
          min={0}
          max={5}
          value={rating}
          onChange={(event) => this.updateMovie('rating', event.target.value)}
        />
        <label htmlFor="movie_rating">Avaliação</label><br />
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div><br />
        <button
          type="button"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
        <br />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form>
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
  movie: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
}.isRequired;

export default MovieForm;
