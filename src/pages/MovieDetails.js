import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';


class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.updateState = this.updateState.bind(this);

    this.state = {
      loading: false,
      id: this.props.match.params.id,
      movie: {},
    };
  }

  componentDidMount() {
    this.updateState();
  }

  updateState() {
    this.setState({
      loading: true,
    }, async () => {
      const response = await movieAPI.getMovie(this.state.id);
      this.setState({
        loading: false,
        movie: response,
      });
    });
  }

  render() {
    const { loading, movie, id } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div>
        { loading ? <Loading /> :
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <div>
            <button><Link to={'/'}>VOLTAR</Link></button>
            <button><Link to={`${id}/edit`}>EDITAR</Link></button>
          </div>
        </div>
        }
      </div>
    );
  }
}

export default MovieDetails;
