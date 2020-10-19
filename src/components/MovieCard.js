import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, id } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <h1> {title} </h1>
        <span> {storyline} </span>
        <Link to={{ pathname: `/movies/${id}`, state: { props: id } }}> VER DETALHES </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: ({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default MovieCard;
