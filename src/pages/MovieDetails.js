import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link, Redirect } from 'react-router-dom';

class MovieDetails extends Component {
  constructor() {
    super();
    this.setMovieState = this.setMovieState.bind(this);
    this.setLoadingMovie = this.setLoadingMovie.bind(this);
    this.setStateDeleteMovie = this.setStateDeleteMovie.bind(this);
    this.state = ({
      movie: [],
    }); 
  }
 
  componentDidMount() {
    this.setMovieState();
  }
  async setMovieState() {
    const { match: { params: { id } } } = this.props;
    const getMovies = await movieAPI.getMovie(id);
    this.setState({
      movie: getMovies,
    });
  }

   setStateDeleteMovie() {    
    this.setState({
      shouldRedirect: true,
    });
  }

  setLoadingMovie() {
    const { movie } = this.state;
    const { movie: { id, title, storyline, imagePath, genre, rating, subtitle } } = this.state;
    if (movie.length === 0) {
      return (
        <div>
          <Loading> </Loading>
        </div>
      );
    }
    return (
      <div>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Tilte: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>    
         <Link to="/" onClick={() => {
            movieAPI.deleteMovie(id);              
          }}>DELETAR</Link>   

        {/* <button
          type="button"          
          onClick={() => {
            movieAPI.deleteMovie(id);              
          }}
        >
          DELETAR
        </button>*/}

      <span>  </span> 
        <Link to={{ pathname: `/movies/${id}/edit` }}>EDITAR</Link> <span>  </span>
        <Link to="/">VOLTAR</Link> 
      </div>
    );
  }


  render() {
    const { shouldRedirect } = this.state
     if (shouldRedirect) {
    return  <Redirect  to='/'/>
    }
    // Change the condition to check the state
    // if (true) return <Loading />;
    return (
      <div data-testid="movie-details">
        {this.setLoadingMovie()}
      </div>
    );
  }
}

export default MovieDetails;
