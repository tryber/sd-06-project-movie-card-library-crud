import React from 'react';
import PropTypes from 'prop-types';

import { Link, Route } from 'react-router-dom';
import MovieDetails from '../pages/MovieDetails';


class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, id } = movie;
    return (
      <div data-testid="movie-card">
        <img alt="texto qualquer" src={imagePath} />
        <h4> {title} </h4>
        <h5> {subtitle} </h5>
        <p> {storyline} </p>
        {/* ⬇ Esta dica veio do Stackoverflow ⬇ */}
        <Link to={`/movies/${id}`}> VER DETALHES</Link>
        <Route path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = { movie: PropTypes.arrayOf(PropTypes.object).isRequired };
