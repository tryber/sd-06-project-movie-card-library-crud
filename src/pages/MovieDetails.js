import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.renderMovie = this.renderMovie.bind(this);

    this.state = {
      title: '',
      storyline: '',
      imagePath: '',
      genre: '',
      rating: 0,
      subtitle: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.renderMovie();
  }

  async renderMovie() {
    const { id } = this.props.match.params;
    this.setState(
      { loading: true },
      async () => {
        const movie = await movieAPI.getMovie(id);
        this.setState({
          title: movie.title,
          storyline: movie.storyline,
          imagePath: movie.imagePath,
          genre: movie.genre,
          rating: movie.rating,
          subtitle: movie.subtitle,
          loading: false,
        });
      },
    );
  }


  render() {
    const { title, storyline, imagePath, genre, rating, subtitle, loading } = this.state;
    const { id } = this.props.match.params;

    return (
      <div data-testid="movie-details">
        {loading ? <Loading /> :
        <div>
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
        }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
};

MovieDetails.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: 3,
    }),
  }),
};

export default MovieDetails;
