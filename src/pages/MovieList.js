import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';
import '../css/MovieList.css';

class MovieList extends Component {
  constructor() {
    super();

    this.updateState = this.updateState.bind(this);

    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.updateState();
  }

  updateState() {
    this.setState({
      loading: true,
    }, async () => {
      this.setState({
        movies: await movieAPI.getMovies(),
        loading: false,
      });
    });
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div className="movie-list" data-testid="movie-list">
        { loading ? <Loading /> :
          movies.map((movie) =>
            <MovieCard
              key={movie.title}
              id={movie.id}
              title={movie.title}
              subtitle={movie.subtitle}
              imgPath={movie.imagePath}
              storyline={movie.storyline}
              rating={movie.rating}
            />)
        }
        {
          movies.length > 0 ? <Link className="add-newmovie-btn" to="/movies/new">+</Link> : false
        }
      </div>
    );
  }
}

export default MovieList;
