import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Redirect } from 'react-router-dom';
class EditMovie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: true,
			movie: {},
			shouldRedirect: true,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderLoading = this.renderLoading.bind(this);
	}

	async handleSubmit(updatedMovie) {
		await movieAPI.updateMovie(updatedMovie);
		this.setState({shouldRedirect: false});
	}

	async renderLoading(){
		const filme = await movieAPI.getMovie(this.props.match.params.id);
		this.setState ({
			status : false, 
			movie: filme,
		});
	}

	componentDidMount(){
		this.renderLoading();
	}

	render() {
		const { status, shouldRedirect, movie } = this.state;
		return status? <Loading /> :  (
			<div data-testid="edit-movie">
				<MovieForm movie={movie} onSubmit={this.handleSubmit} />
				{shouldRedirect? false : <Redirect to="/" /> }
        
			</div>
		);
	}
}
EditMovie.propTypes = {

	getMovie :PropTypes.func.isRequired

};

export default EditMovie;
