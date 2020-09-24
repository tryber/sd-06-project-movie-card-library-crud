import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import MovieForm from '../components/MovieForm';
import { createMovie, getMovie } from '../services/movieAPI'

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.handleSubmit()
  }

  async handleSubmit(newMovie) {
    const result = await getMovie();
    console.log(await result)
  }

  render() {
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;

// async handleFetchMovieApi() {
//   const result = await getMovie(this.props.match.params.id);
//   this.setState({
//     movie: result,
//     loading: true,
//   });
// }

// await createMovie(newMovie)
//     return <Redirect to="/" />;