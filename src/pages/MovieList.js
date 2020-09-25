import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';
import { Link }  from 'react-router-dom';
class MovieList extends Component {
	constructor() {
		super();

		this.state = {
			movies: [],
			carregando: true,
		};
	}

	async componentDidMount() {
		const movie =  await movieAPI.getMovies();

		this.setState ( {
			movies: movie,
			carregando : false
		});
	}

	render() {
		const { movies, carregando } = this.state;

    

		return carregando ? <Loading /> :  (
			<div data-testid="movie-list">
				{movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
				<Link to={'movies/new'}>ADICIONAR CARTÃO</Link><br/>
			</div>
		);
	}
}

export default MovieList;
