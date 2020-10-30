import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.getMyMovieDetail = this.getMyMovieDetail.bind(this);
    this.deleteSelectedMovie = this.deleteSelectedMovie.bind(this);

    this.state = {
      loading: true,
      movieDetail: {},
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getMyMovieDetail(id);
  }

  async getMyMovieDetail(id) {
    this.setState(
      { loading: true },
      async () => {
        const movieDetail = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          movieDetail,
        });
      },
    );
  }

  async deleteSelectedMovie() {
    const { id } = this.props.match.params;
    await movieAPI.deleteMovie(id);
    this.props.history.push("/");
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movieDetail;
    const { loading } = this.state;

    return (
      <div data-testid="movie-details">
        { loading ? <Loading />
          :
        <div>
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <Link to={'/'}>VOLTAR</Link>
          <br />
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <br />
          <Link to="/" onClick={this.deleteSelectedMovie}>DELETAR</Link>
        </div>
        }
      </div>
    );
  }
}

MovieDetails.propTypes = { match: PropTypes.shape.isRequired };

export default MovieDetails;
