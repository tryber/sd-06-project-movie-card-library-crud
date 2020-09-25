import { findAllByTitle } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router-dom';
import MovieDetails from '../pages/MovieDetails';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, id } = this.props.movie;
    const pathWay = `/movies/${id}`;
    console.log(this.props.movie);

    return (
      <div data-testid="movie-card">
        Movie Card
        {title}<br></br>
        {storyline}<br></br>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>    
        <MovieDetails />    
      </div>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.objectOf(PropTypes.string).isRequired };

export default MovieCard;
